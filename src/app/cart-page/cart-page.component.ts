import { Component, OnInit } from '@angular/core';
import { CartService } from '../Shared/ShoppingCartService';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

 myCartList:any;
 totalPrice:number=0

  constructor(private cart:CartService) { }

  ngOnInit(): void {

    this.myCartList = this.cart.myCart;
    
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML='';
    script.src="../assets/js/script.js";
    script.async=true;
    script.defer=true;
    body.appendChild(script);
  }

  clearList(){
    this.cart.clear()
  }

  calcTotal(){
    return this.cart.getTotalPrice()
  }


}
