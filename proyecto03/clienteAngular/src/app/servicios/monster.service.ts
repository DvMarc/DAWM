import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  constructor(private http: HttpClient) { 
  }

  obtenerDatos(urlMonster:string) {
    return this.http.get('https://www.dnd5eapi.co'+urlMonster);
  }
}
