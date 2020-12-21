import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() clickCount: number;
  @Input() counterMessage: string;
  @Output() increment = new EventEmitter<void>();
  @Output() requestCounterMessage = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();
  @Output() randomNumber = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementClicked(){
    this.increment.emit();
  }
  resetClicked(){
    this.reset.emit();
  }
  getRandomNumber(){
    this.randomNumber.emit()
  }
}
