import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Shared/CategoryService';
import { IcartItems, Icategory } from 'src/app/Shared/General';

@Component({
  selector: 'app-add-category-page',
  templateUrl: './add-category-page.component.html',
  styleUrls: ['./add-category-page.component.css']
})
export class AddCategoryPageComponent implements OnInit {
  
  CategoryList:any;

  constructor(private category:Category) { 
  
  }


  
  ngOnInit(): void {
    this.category.getAllCategory().subscribe((data)=>{this.CategoryList=data})
    
  }


}
