import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-my-heroes',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <a routerLink="/detail/{{hero.id}}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </a>
        <button class="delete" title="delete hero"
        (click)="deleteHero(hero)">x</button>
      </li>
    </ul>
    <div>
      <label>Hero name:
        <input #heroName />
      </label>
      <button (click)="addHero(heroName.value); heroName.value=''">add</button>
    </div>
  `,
  styles: [`
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      position: relative;
      cursor: pointer;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes a {
      color: #888;
      text-decoration: none;
      position: relative;
      display: block;
      width: 250px;
    }
    .heroes a:hover {
      color:#607D8B;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      min-width: 16px;
      text-align: right;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .button {
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      cursor: hand;
      font-family: Arial;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button.delete {
      position: relative;
      left: 194px;
      top: -32px;
      background-color: gray !important;
      color: white;
    }
  `],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // promise
  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }
}
