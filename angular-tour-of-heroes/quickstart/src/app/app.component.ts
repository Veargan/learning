import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>Hello {{name}}</h2>`,
})

export class AppComponent  {
  name = 'Angular';
  title = 'Windstorm';
}
