import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

@Component({
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    FlightSearchComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World!';

  changeTitle(): void {
    if (this.title === 'Hello World!') {
      this.title = 'Hello Angular!';
    } else {
      this.title = 'Hello World!';
    }
  }
}
