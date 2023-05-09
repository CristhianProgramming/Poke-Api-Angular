import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';
import { Subscriber, switchMap } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interfaces';

interface evolutions {
  chain: string
  nombre: string,
  img?: string 
}

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.css'],
})
export class DeatilsComponent implements OnInit{
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  public PokemonDetail!: Pokemon;

  public Evolutions: evolutions[] = []

  constructor(
    private router: ActivatedRoute,
    private service: PokemonService
  ) { }


  ngOnInit(): void {
    this.service
      .getPokemonDetails(
        `${this.url}${this.router.snapshot.paramMap.get('nombre')}`
      )
      .subscribe((r) => {
        this.PokemonDetail = r;
        this.service.getEvolutions(r.species.url).pipe(
          switchMap(r => this.service.getChain(r.evolution_chain.url))

        ).subscribe(r => {
          console.log(r)
          if (r.chain.species) {
            this.service.getPokemonDetails(`${this.service.Url}pokemon/${r.chain.species.name}`).subscribe(r => {
              this.Evolutions[0] = { chain: 'to', nombre: r.name, img: r.sprites.other?.dream_world.front_default }
            })
            if (r.chain.evolves_to) {
              this.service.getPokemonDetails(`${this.service.Url}pokemon/${r.chain.evolves_to[0].species.name}`).subscribe(r => {
                this.Evolutions[1] = { chain: 'to', nombre: r.name, img: r.sprites.other?.dream_world.front_default }
              })
            }
            if (r.chain.evolves_to) {
              this.service.getPokemonDetails(`${this.service.Url}pokemon/${r.chain.evolves_to[0].evolves_to[0].species.name}`).subscribe(r => {
                this.Evolutions[2] = { chain: 'to', nombre: r.name, img: r.sprites.other?.dream_world.front_default }
              })

            }
          }
        })
      });
  }
}
