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
export class AddComponent implements OnInit {
  toCreateHero!: CreateHero;


  constructor(private router: Router, private heroService: HeroService) {
  }

  heroForm!: FormGroup;
  ngOnInit() {
    this.heroForm = new FormGroup({
      heroName: new FormControl('', [Validators.required]),
      heroRace: new FormControl('HUMAN', [Validators.required]),
      heroStrength: new FormControl('', [Validators.required]),
      heroAgility: new FormControl('', [Validators.required]),
      heroDexterity: new FormControl('', [Validators.required]),
      heroIntelligence: new FormControl('', [Validators.required])
    });
  }

  get heroName() {
    return this.heroForm.get('heroName')!;
  }
  get heroRace() {
    return this.heroForm.get('heroRace')!;
  }
  get heroStrength() {
    return this.heroForm.get('heroStrength')!;
  }
  get heroAgility() {
    return this.heroForm.get('heroAgility')!;
  }
  get heroDexterity() {
    return this.heroForm.get('heroDexterity')!;
  }
  get heroIntelligence() {
    return this.heroForm.get('heroIntelligence')!;
  }

  submit() {
    if (this.heroForm.invalid) {
      return;
    }


    this.toCreateHero = {
      name: this.heroForm.value.heroName,
      race: this.heroForm.value.heroRace,
      agility: this.heroForm.value.heroAgility,
      dexterity: this.heroForm.value.heroDexterity,
      intelligence: this.heroForm.value.heroIntelligence,
      strength: this.heroForm.value.heroStrength
    };

    this.heroService.create(this.toCreateHero).subscribe();

    this.router.navigate(['/']);
  }

}
