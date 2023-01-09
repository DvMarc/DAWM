import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterUriService {

  constructor(private http: HttpClient) { 
  }

  obtenerDatos() {
    return this.http.get("./assets/mounstros.json")
  }
}
