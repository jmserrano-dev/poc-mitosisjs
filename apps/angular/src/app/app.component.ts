import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Button } from "@poc-mitosis/library-angular/dist";
import { StButton } from "@poc-stencil/library-angular/dist";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, Button, StButton],
})
export class AppComponent {
  title = "angular";

  public handleClick(event?: Event) {
    console.log("[ANGULAR APP] CLICK", { event });
    alert("Hello");
  }
}
