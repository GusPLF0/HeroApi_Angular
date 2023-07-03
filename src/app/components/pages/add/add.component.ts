import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { CreateHero } from 'src/app/interface/CreateHero';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private router: Router, private heroService: HeroService) {
  }

  toCreateHero!: CreateHero;

  createHandler(hero: any) {
    console.log(hero);
    this.toCreateHero = {
      name: hero.heroName,
      race: hero.heroRace,
      agility: hero.heroAgility,
      dexterity: hero.heroDexterity,
      intelligence: hero.heroIntelligence,
      strength: hero.heroStrength
    };

    this.heroService.create(this.toCreateHero).subscribe();

    this.router.navigate(['/']);
  }

}
