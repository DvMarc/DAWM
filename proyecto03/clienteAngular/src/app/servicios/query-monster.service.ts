import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryMonsterService {

  constructor(private http: HttpClient) { 
  }

  obtenerDatos(urlMonster:string) {
    return this.http.get('https://www.dnd5eapi.co/api/monsters/?name='+urlMonster);
  }
}
