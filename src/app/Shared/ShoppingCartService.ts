import { Injectable } from "@angular/core"
import { Iitems, IcartItems } from "./General"

@Injectable()
export class CartService {

    myCart:Array<IcartItems>=[]
    constructor(){
        let myJSONCart=localStorage.getItem("Cart")

        if(myJSONCart!==null)
            this.myCart=JSON.parse(myJSONCart)
    }

    
    addToCart(item:Iitems){
        for(let x of this.myCart){
            if (x.ItemId === item.ItemId) 
                {   ++x.Quantity
                    x.TotalPrice=x.PurchasePrice*x.Quantity
                    localStorage.setItem("Cart",JSON.stringify(this.myCart))
                        console.log(this.myCart)
                    return
                }
            }
                let newCartItem:IcartItems = {
                    ItemId: item.ItemId,
                    ItemName: item.ItemName,
                    SalesPrice: item.SalesPrice,
                    CategoryName: item.CategoryName,
                    PurchasePrice:item.PurchasePrice,
                    ImageName: item.ImageName,
                    CategoryId: item.CategoryId,
                    Quantity:1,
                    TotalPrice:item.PurchasePrice}

                    this.myCart.push(newCartItem)   
                    
                    localStorage.setItem("Cart",JSON.stringify(this.myCart))
                    console.log(this.myCart)
        }

    clear(){
        this.myCart.splice(0,this.myCart.length)
        localStorage.setItem("Cart",JSON.stringify(this.myCart))
        
    }

    removeItem(itemId:number){
        for(let i=0;i<this.myCart.length;i++)
        {
            if(this.myCart[i].ItemId === itemId)
            {this.myCart.splice(i,1)
                localStorage.setItem("Cart",JSON.stringify(this.myCart))
            }
        }
    }

    setInLocalHost(){
        localStorage.setItem("Cart",JSON.stringify(this.myCart))
    }

    getCartItems(){
        
       return this.myCart
    }

    getTotalPricePerItem(quantity:number, Item:IcartItems)
    { 
        Item.Quantity = quantity;
        Item.TotalPrice = Item.PurchasePrice * Item.Quantity
        this.setInLocalHost();
    }

    getTotalPrice(){
        let tp=0
        for (let items of this.myCart)
        {
          tp=tp+items.TotalPrice
        }

        return tp
    }

    getAllQuantities(){
        let q = 0;
        for(let x of this.myCart)
        {
            q = q + x.Quantity
        }
        return q;
    }
    

 

}