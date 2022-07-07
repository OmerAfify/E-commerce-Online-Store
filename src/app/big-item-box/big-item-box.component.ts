import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-item-box',
  templateUrl: './big-item-box.component.html',
  styleUrls: ['./big-item-box.component.css']
})
export class BigItemBoxComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
