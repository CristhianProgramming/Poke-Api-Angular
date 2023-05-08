import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon, ResponsePKM, ResultPKM } from '../../interfaces/pokemon.interfaces';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public listaPokemons: Pokemon[] = [];
  public LinksDominate! : ResponsePKM;
  constructor(private service:PokemonService){}
  
  ngOnInit(): void {
    this.service.getPokemonsList()
    .subscribe(r=>
      {
        this.LinksDominate = r
        r.results.forEach(a => {
         this.service.getPokemonDetails(a.url).subscribe(
          r => this.listaPokemons.push(r)
         )
        });
      })
  }

  pageSet(url? : string){
    this.listaPokemons = [];
    this.service.getPokemonsList(url)
    .subscribe(r=>
      {
        this.LinksDominate = r
        r.results.forEach(a => {
         this.service.getPokemonDetails(a.url).subscribe(
          r => this.listaPokemons.push(r)
         )
        });
      })
  }

}
