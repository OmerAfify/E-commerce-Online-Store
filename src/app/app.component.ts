import { Component } from '@angular/core';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multikart';
  ngOnInit():void{
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


}
