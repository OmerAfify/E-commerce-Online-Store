import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemBoxComponent } from './item-box/item-box.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

import { Items } from './Shared/ItemsServices';
import { Message } from './Shared/MessageSevices';
import {CartService} from './Shared/ShoppingCartService'
import {Category} from "./Shared/CategoryService"

import {HttpClientModule} from "@angular/common/http";
import { BigItemBoxComponent } from './big-item-box/big-item-box.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

import { AdminHomePageComponent } from './Admin/admin-home-page/admin-home-page.component';
import { AddCategoryPageComponent } from './Admin/Category-page/add-category-page.component'
import { AddingACategoryPageComponent } from './Admin/adding-a-category-page/adding-a-category-page.component';
import { SiderCartComponent } from './sider-cart/sider-cart.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ItemBoxComponent,
    ItemsPageComponent,
    HomePageComponent,
    DetailsPageComponent,
    BigItemBoxComponent,
    CartPageComponent,
    ShoppingCartItemComponent,
    CheckoutPageComponent,
    AdminHomePageComponent,
    AddCategoryPageComponent,
    AddingACategoryPageComponent,
    SiderCartComponent,
    CreateAccountPageComponent,
    LoginPageComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'Home', component: HomePageComponent},
      {path:'Items', component:ItemsPageComponent},
      {path:"Details/:id", component:DetailsPageComponent},
      {path:"ShoppingPage", component:CartPageComponent},
      {path:"Checkout", component:CheckoutPageComponent},
      {path:"Login", component:LoginPageComponent},
      {path:"CreateAccount", component:CreateAccountPageComponent},


      {path:"Admin/Home",component:AdminHomePageComponent},
      {path:"Admin/AddCategory",component:AddCategoryPageComponent},
      {path:"Admin/AddingACategory",component:AddingACategoryPageComponent},
      {path:"Admin/AddingACategory/:id",component:AddingACategoryPageComponent},

      {path:'', redirectTo:"/Home", pathMatch:"full"},
    ])
  ],
  providers: [Items,Message, CartService, Category],
  bootstrap: [AppComponent]
})
export class AppModule { }
