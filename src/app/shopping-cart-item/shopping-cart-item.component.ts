import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../Shared/ShoppingCartService';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item:any;
  RealTotalPrice:number=0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  removeItem(){
    this.cart.removeItem(this.item.ItemId)
  }

  onQtyChange(qty:any){
    qty=qty.target.value
    this.cart.getTotalPricePerItem(qty,this.item)
  }

  
  
}
