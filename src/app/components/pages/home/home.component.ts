import { Component } from '@angular/core';
import { Hero } from 'src/app/interface/Hero';
import { HeroService } from 'src/app/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroList: Hero[] = []

  constructor(private router: Router, private heroService: HeroService) {
    this.getAllHeroes();
  }

  getAllHeroes(): void {
    this.heroService.getAll().subscribe((heroes) => this.heroList = heroes)
  }

  deleteHero(hero: Hero) {
    this.heroList = this.heroList.filter((h) => hero.heroId !== h.heroId)
    console.log(hero.heroId);
    this.heroService.remove(hero.heroId).subscribe();
  }

  navigateToAdd() {
    this.router.navigate(['/add']);
  }

  // editHero(hero: Hero) {
  //   this.heroService.
  // }
}
