import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() text = 'text';
  @Input() style;
  @Input() id: number;

  @Output() clicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(id:number){
    this.clicked.emit(id);
  }
}
