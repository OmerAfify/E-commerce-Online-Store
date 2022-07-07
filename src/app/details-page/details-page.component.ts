import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../Shared/ItemsServices';
import { ActivatedRoute } from '@angular/router';
import {CartService} from "../Shared/ShoppingCartService"

declare var $ :any;
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  
clickedId:any;
data:any;
Server="http://souq.alishahin.net//Uploads//"

  constructor(private route:ActivatedRoute, private items:Items, private shoppingCart:CartService) { }

  ngOnInit(): void {
    this.clickedId = this.route.snapshot.params["id"];
    this.items.getProductByID(this.clickedId).subscribe((data)=>{
      this.data=data
      this.data.ImageName = this.Server + this.data.ImageName
    })

    $(document).ready(function()  {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML='';
    script.src="../assets/js/script.js";
    script.async=true;
    script.defer=true;
    body.appendChild(script);
  })
  }

  addToCart(){
    this.shoppingCart.addToCart(this.data)
  }

}
