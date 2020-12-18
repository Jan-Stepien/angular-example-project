import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { incrementClickCount, resetClickCount } from 'src/app/actions/click-counter.actions';
import { ClickState } from 'src/app/app.state';
import { tileStyles } from 'src/app/components/tile/tile.config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faArrowRight = faArrowRight;
  tileStyles = tileStyles;
  tiles = [
    {
      label: "Angular",
      redirectTo: 'angular'
    },
    {
      label: "Flutter",
      redirectTo: 'flutter'
    }
  ];

  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }
  redirect(index: number){
    this.router.navigate([this.tiles[index].redirectTo]);
  }
  scrollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
