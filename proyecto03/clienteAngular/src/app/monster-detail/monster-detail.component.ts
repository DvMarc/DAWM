import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '../interfaz/monster';
import { QueryMonsterService } from '../servicios/query-monster.service';
import { MonsterService } from '../servicios/monster.service';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent {
  mounstro!: Monster;
  url = '';
  constructor(private route: ActivatedRoute, private queryMonsterService: QueryMonsterService, private monsterService: MonsterService) {
    this.route.params.subscribe(params => {
      let id = params['uuid'];
      this.queryMonsterService.obtenerDatos(id).subscribe((data: any) => {
        console.log(data)
        this.url = data.results[0].url;
        this.monsterService.obtenerDatos(this.url).subscribe((data: any) => {
          this.mounstro = data;
          console.log(this.mounstro.damage_vulnerabilities);
        })
      })
    });
  }
}