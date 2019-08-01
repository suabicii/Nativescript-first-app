import { Component, OnInit } from '@angular/core';
import { Film } from '../film-type';
import { FilmyService } from '../filmy.service';
import { ActivatedRoute } from '@angular/router';
import { isAndroid } from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  moduleId: module.id,
})
export class DetailsComponent implements OnInit {

  movie: Film;
  mediaUrl: String;

  constructor(private filmService: FilmyService,
    private route: ActivatedRoute,
    private routerExtension: RouterExtensions) { }

  ngOnInit() {
    if (isAndroid) {
      this.mediaUrl = 'http://10.0.2.2:8000';
    } else {
      this.mediaUrl = 'http://127.0.0.1:8000';
    }
    const id = +this.route.snapshot.params.id;
    this.filmService.getMovie(id).subscribe(data => {
      this.movie = data;
    }, error => {
      console.log(error);
    })
  }

  goBack() {
    this.routerExtension.backToPreviousPage();
  }

}
