import { APP_INITIALIZER, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from '@poc-mitosis/library-angular/dist';
// import { defineCustomElements } from '@poc-stencil/library/loader';
import { MyComponent } from '@poc-stencil/library-angular/dist';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, Button, MyComponent],
})
export class AppComponent {
  title = 'angular';

  public handleClick() {
    alert('Hello');
  }
}
