import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from '@poc-mitosis/library-angular/dist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';

  public handleClick() {
    alert('Hello');
  }
}
