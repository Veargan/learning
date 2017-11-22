import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-detail',
  styles: [`
  label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
  }
  input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
  }
  button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer; cursor: hand;
  }
  button:hover {
    background-color: #cfd8dc;
  }
  button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }
  `],
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} Details!</h2>
      <div>ID: {{hero.id}}</div>
      <div>Name: {{hero.name}}
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
    <button (click)="goBack()">go back</button>
  `,
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  @Input() hero: Hero;

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
