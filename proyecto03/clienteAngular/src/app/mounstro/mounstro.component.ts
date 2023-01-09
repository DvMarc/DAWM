import { Component } from '@angular/core';
import { Monster } from '../interfaz/monster';
import { MonsterUri } from '../interfaz/monster-uri';
import { MonsterUriService } from '../servicios/monster-uri.service';
import { MonsterService } from '../servicios/monster.service';

@Component({
  selector: 'app-mounstro',
  templateUrl: './mounstro.component.html',
  styleUrls: ['./mounstro.component.css']
})
export class MounstroComponent {
  mounstros: Monster[] = [];
  datos: MonsterUri[] = [];
  constructor(private monstersService: MonsterService, private monsterUriService: MonsterUriService) {
    this.monsterUriService.obtenerDatos().subscribe((data: any) => {
      this.datos = data;
      this.datos.forEach(element => {
            this.monstersService.obtenerDatos(element.url).subscribe((data: any) => {
              if(data.image != undefined ) this.mounstros.push(data);
              console.log(data.image);
          });
      });
    });
  }
}
