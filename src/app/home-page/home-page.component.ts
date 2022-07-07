import { Component, OnInit } from '@angular/core';
import { Iitems } from '../Shared/General';
import { Items } from '../Shared/ItemsServices';
import{Message} from "../Shared/MessageSevices"
declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  popularProducts:any;
  newProducts:any;
  allproducts:Array<Iitems>=[];

  constructor(private items:Items, private messages:Message) { }

  ngOnInit():void{
  
  this.items.getAllProducts().subscribe((data)=>
  {this.allproducts=data
  });

  this.items.getPopularProducts().subscribe((data)=>
  {this.popularProducts=data
  });

  this.items.getNewProducts().subscribe((data)=>
  {this.newProducts=data
    
    
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      let script2 = document.createElement('script');
      script.innerHTML='';
      script2.innerHTML='';
      script.src="../assets/js/script.js";
      script2.src="../assets/js/script.js";
      script.async=true;
      script.defer=true;
      body.appendChild(script);

      console.log(this.allproducts)
    })/**/
  ;

  } 



}
