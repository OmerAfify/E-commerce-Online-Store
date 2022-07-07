import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      let script2 = document.createElement('script');
      script.innerHTML='';
      script2.innerHTML='';
      script.src="../../assets/js/dashboard/default.js";
      script2.src="../../assets/js/admin-script.js";
      script.async=true;
      script.defer=true;
      script2.async=true;
      script2.defer=true;
      body.appendChild(script);
      body.appendChild(script2);
  }

}
