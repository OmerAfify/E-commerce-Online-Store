import { Component, OnInit } from '@angular/core';
import { CartService } from '../Shared/ShoppingCartService';

@Component({
  selector: 'app-sider-cart',
  templateUrl: './sider-cart.component.html',
  styleUrls: ['./sider-cart.component.css']
})
export class SiderCartComponent implements OnInit {

  mySidebarCart:any;

  constructor(private myCart:CartService) { }

  ngOnInit(): void {
    this.mySidebarCart = this.myCart.getCartItems()
  }

  removeItemFromCart(id:number){
   this.myCart.removeItem(id)
  }

  getSumQuantity(){
    return this.myCart.getAllQuantities();
  }

}
