import { Component } from '@angular/core';
import { MainComponent } from '../../standalone/main/main.component';
import { AboutMeComponent } from '../../standalone/about-me/about-me.component';
import { ContactComponent } from '../../standalone/contact/contact.component';
import { WebDevelopmentComponent } from '../../standalone/web-development/web-development.component';
import { GameDevelopmentComponent } from '../../standalone/game-development/game-development.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutMeComponent, ContactComponent, WebDevelopmentComponent, GameDevelopmentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
