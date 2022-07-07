import { Component, OnInit } from '@angular/core';
import {Items} from "../Shared/ItemsServices"

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  myBigItems:any;

  constructor(private items:Items) { }

  ngOnInit(): void {
    this.items.getAllProducts().subscribe((data)=>{this.myBigItems=data})
  }

}
