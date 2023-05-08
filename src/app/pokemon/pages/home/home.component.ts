import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public listaPokemons: Pokemon[] = [];

  constructor(private service:PokemonService){}


  ngOnInit(): void {
    this.service.getPokemonsList()
    .subscribe(r=>
      {
        r.results.forEach(a => {
         this.service.getPokemonDetails(a.url).subscribe(
          r => this.listaPokemons.push(r)
         )
        });
      })

  } 



}
