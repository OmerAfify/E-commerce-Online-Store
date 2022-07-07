import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../Shared/ShoppingCartService';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  @Input() data:any;

  addToCart(){
   this.cart.addToCart(this.data) 
  }

  removeFromCart(){
    this.cart.removeItem(this.data.ItemId)
  }
  
}
