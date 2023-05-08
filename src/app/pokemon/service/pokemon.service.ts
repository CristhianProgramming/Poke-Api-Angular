import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultPKM, ResponsePKM, Pokemon, Evolution } from '../interfaces/pokemon.interfaces';
import { SpeciePK } from '../interfaces/specie.interface';
import { Pokemon2 } from '../interfaces/pokemon2.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public Url = "https://pokeapi.co/api/v2/"
  constructor(private http: HttpClient) { }


  getpokemon2(url: string) {
    return this.http.get<Pokemon2>(url)
  }

  getPokemonsList(link?: string) {
    if (link) {
      return this.http.get<ResponsePKM>(link)
    }
    return this.http.get<ResponsePKM>(`${this.Url}pokemon/?offset=21&limit=21`)
  }

  getPokemonDetails(url: string) {
    return this.http.get<Pokemon>(url)
  }

  getEvolutions(url: string) {
    return this.http.get<SpeciePK>(url)
  }

  getChain(url: string) {
    return this.http.get<Evolution>(url)
  }
}
