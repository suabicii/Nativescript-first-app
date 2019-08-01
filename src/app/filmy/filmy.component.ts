import { Component, OnInit } from '@angular/core';
import { FilmyService } from '../filmy.service';
import { Film } from '../film-type';

@Component({
  selector: 'ns-filmy',
  templateUrl: './filmy.component.html',
  styleUrls: ['./filmy.component.css'],
  moduleId: module.id,
})
export class FilmyComponent implements OnInit {

  movies: Film[];

  constructor(private filmyService: FilmyService) { }

  ngOnInit() {
    this.filmyService.allMovies().subscribe(data => {
      this.movies = data;
    }, error => {
      console.log(error);
    });
  }

}
