import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Shared/CategoryService';
import { Icategory } from 'src/app/Shared/General';


@Component({
  selector: 'app-adding-a-category-page',
  templateUrl: './adding-a-category-page.component.html',
  styleUrls: ['./adding-a-category-page.component.css']
})
export class AddingACategoryPageComponent implements OnInit {

  id:any;
  l:any;
  formState=1;
  category:any;

  constructor(private route:Router,private r:ActivatedRoute, private cat:Category) {
   }

  ngOnInit(): void {
    this.cat.getAllCategory().subscribe((data)=>{this.l = data;
      console.log("data l in sub is "+this.l)

      this.r.paramMap.subscribe(params=>{this.id = params.get('id')
  
      if(this.id==null || this.id==undefined || this.id==" " ||  this.id==" "){
        this.formState=1
        alert(this.formState)  
      }else{
      this.formState=2 
      this.category = this.cat.getCategoryById(this.id , this.l)
      alert(this.formState)  
    }  
    })})
  }

  onSave(myForm:NgForm){
    if(this.formState==1){
            let myCategoryItem:Icategory ={
              CategoryId:myForm.control.value.CategoryId,
              CategoryName:myForm.control.value.CategoryName
            } 
            this.cat.addCategory(myCategoryItem);
            this.route.navigate(["/Admin/AddCategory"])
      } 
    else{
          console.log(this.category); 
          this.route.navigate(["/Admin/AddCategory"]) 
    }

}

  

}
