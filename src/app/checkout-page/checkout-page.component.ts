import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitDo(myForm:NgForm){
   console.log(myForm.value)
   console.log(myForm)}

}
