import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../servicios/api-service.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  url:string ='';
  data :any;
  data1 :any;
  data2 :any;
  ngOnInit(): void {
    this.data = 
    {
      'ability-scores': '/api/ability-scores',
      'alignments': '/api/alignments',
      'backgrounds': '/api/backgrounds',
      'classes': '/api/classes',
      'conditions': '/api/conditions',
      'damage-types': '/api/damage-types',
      'equipment': '/api/equipment',
      'equipment-categories': '/api/equipment-categories',
      'feats': '/api/feats',
      'features': '/api/features',
      'languages': '/api/languages',
      'magic-items': '/api/magic-items',
      'magic-schools': '/api/magic-schools',
      'monsters': '/api/monsters',
      'proficiencies': '/api/proficiencies',
      'races': '/api/races',
      'rule-sections': '/api/rule-sections',
      'rules': '/api/rules',
      'skills': '/api/skills',
      'spells': '/api/spells',
      'subclasses': '/api/subclasses',
      'subraces': '/api/subraces',
      'traits': '/api/traits',
      'weapon-properties': '/api/weapon-properties'
      };

    this.data1 ={
      "count": 6,
      "results": [
      {
      "index": "cha",
      "name": "CHA",
      "url": "/api/ability-scores/cha"
      },
      {
      "index": "con",
      "name": "CON",
      "url": "/api/ability-scores/con"
      },
      {
      "index": "dex",
      "name": "DEX",
      "url": "/api/ability-scores/dex"
      },
      {
      "index": "int",
      "name": "INT",
      "url": "/api/ability-scores/int"
      },
      {
      "index": "str",
      "name": "STR",
      "url": "/api/ability-scores/str"
      },
      {
      "index": "wis",
      "name": "WIS",
      "url": "/api/ability-scores/wis"
      }
      ]
      };
    this.data2 = {
      "index": "cha",
      "name": "CHA",
      "full_name": "Charisma",
      "desc": [
      "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
      "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."
      ],
      "skills": [
      {
      "name": "Deception",
      "index": "deception",
      "url": "/api/skills/deception"
      },
      {
      "name": "Intimidation",
      "index": "intimidation",
      "url": "/api/skills/intimidation"
      },
      {
      "name": "Performance",
      "index": "performance",
      "url": "/api/skills/performance"
      },
      {
      "name": "Persuasion",
      "index": "persuasion",
      "url": "/api/skills/persuasion"
      }
      ],
      "url": "/api/ability-scores/cha"
      };
  }
  constructor(private apiService: ApiServiceService) {
  }
  formularioEnviado(){
    console.log(this.url);
  }
}
