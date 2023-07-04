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
      strength: hero.heroStrength,
      agility: hero.heroAgility,
      intelligence: hero.heroDexterity,
      dexterity: hero.heroIntelligence
    };

    this.heroService.create(this.toCreateHero).subscribe();

    this.router.navigate(['/']);
  }

}
