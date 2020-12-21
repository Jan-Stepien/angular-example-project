import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { tileStyles } from 'src/app/components/tile/tile.config';

@Component({
  selector: 'app-angular-main-page',
  templateUrl: './angular-main-page.component.html',
  styleUrls: ['./angular-main-page.component.css']
})
export class AngularMainPageComponent implements OnInit {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  tileStyles = tileStyles;
  tiles = [
    {
      label:'NgRx',
      redirectTo: 'ngRx'
    },
    // TODO:
    // {
    //   label:'Boostrap used',
    //   redirectTo: 'home'
    // },
    // {
    //   label:'Responsive design',
    //   redirectTo: 'home'
    // },
    // {
    //   label:'GitHub',
    //   redirectTo: 'home'
    // }
];
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  tileClicked(index: number){
    this.router.navigate([this.tiles[index].redirectTo]);
  }
  setTileStyle(index: number){
    return index % 2 === 0 ? tileStyles.blackTile : tileStyles.whiteTile
  }
}
