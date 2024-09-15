import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { MapExamplessComponent } from './map-exampless/map-exampless.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapExamplessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'api-test';
}
