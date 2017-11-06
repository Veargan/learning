import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} Details!</h2>
      <div>ID: {{hero.id}}</div>
      <div>Name: {{hero.name}}
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `,
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}