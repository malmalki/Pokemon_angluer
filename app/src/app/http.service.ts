import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.name;
    
        
  }
  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/20/');
    let po = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    // console.log(bulbasaur);


    bulbasaur.subscribe(data => {
      console.log("Name:", data.name)
      this.name = data.name
      let name = data.name;
      // this.name = name;
      let ability = [];
     
      for (let i = 0; i < data.abilities.length; i++ ){
        ability.push(data.abilities[i])
        console.log("ability "+i+" "+data.abilities[i].ability.name);
        
      }
      // console.log("ability:", data.abilities[0].ability.name);
      
    });
    po.subscribe(data => {
      console.log("Name:", data.name)
      this.name = data.name
      let name = data.name;
      // this.name = name;
      let ability = [];
     
      for (let i = 0; i < data.abilities.length; i++ ){
        ability.push(data.abilities[i])
        console.log("ability "+i+" "+data.abilities[i].ability.name);
        
      }
      // console.log("ability:", data.abilities[0].ability.name);
      
    });
  }
}
