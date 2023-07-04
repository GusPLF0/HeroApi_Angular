import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CreateHero } from 'src/app/interface/CreateHero';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Hero } from 'src/app/interface/Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<CreateHero>
  @Input() heroData: Hero | null = null;



  heroForm!: FormGroup;

  ngOnInit() {
    this.heroForm = new FormGroup({
      heroName: new FormControl(this.heroData ? this.heroData.name : '', [Validators.required]),
      heroRace: new FormControl(this.heroData ? this.heroData.race : 'HUMAN', [Validators.required]),
      heroStrength: new FormControl(this.heroData ? this.heroData.strength : '', [Validators.required]),
      heroAgility: new FormControl(this.heroData ? this.heroData.agility : '', [Validators.required]),
      heroDexterity: new FormControl(this.heroData ? this.heroData.dexterity : '', [Validators.required]),
      heroIntelligence: new FormControl(this.heroData ? this.heroData.intelligence : '', [Validators.required])
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
    this.onSubmit.emit(this.heroForm.value)
  }
}
