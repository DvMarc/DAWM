import { Component } from '@angular/core';
import { MonsterService } from './servicios/monster.service';
import { MonsterUriService } from './servicios/monster-uri.service';
import { Monster } from './interfaz/monster';
import { MonsterUri } from './interfaz/monster-uri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteAngular';
}
