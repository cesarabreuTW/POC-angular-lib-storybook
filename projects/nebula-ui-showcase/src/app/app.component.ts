import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NebulaModule } from '@nebula-ui/src/public-api';
import { ButtonComponent } from '@nebula-ui/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, NebulaModule],
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nebula-ui-showcase';
}
