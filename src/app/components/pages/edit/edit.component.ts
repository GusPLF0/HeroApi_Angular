import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CreateHero } from 'src/app/interface/CreateHero';
import { Hero } from 'src/app/interface/Hero';

import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  hero!: Hero;
  toUpdateHero!: CreateHero;


  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const id = params['heroId'];
      this.heroService.getById(id).subscribe(item => {
        this.hero = item;
      });
    });

  }

  editHandler(hero: any) {
    const id = this.hero.heroId

    this.toUpdateHero = {
      name: hero.heroName,
      race: hero.heroRace,
      agility: hero.heroAgility,
      intelligence: hero.heroDexterity,
      dexterity: hero.heroIntelligence,
      strength: hero.heroStrength
    };


    this.heroService.update(id, this.toUpdateHero).subscribe();

    this.router.navigate(['/']);
  }
}
