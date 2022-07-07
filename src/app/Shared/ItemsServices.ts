import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Iitems } from "./General";


@Injectable()
export class Items {

    constructor(private http:HttpClient){}

     getAllProducts():Observable<Array<Iitems>>{
        return this.http.get<Array<Iitems>>("http://souq.alishahin.net//api/Items")  
    }

    getPopularProducts():Observable<Iitems>{
        return this.http.get<Iitems>("http://souq.alishahin.net//api/Items/PopularItems")
    }

    getNewProducts():Observable<Iitems>{
        return this.http.get<Iitems>("http://souq.alishahin.net//api/Items/NewItems")
    }

    getProductByID(id:number):Observable<Iitems>{
        return this.http.get<Iitems>("http://souq.alishahin.net//api/Items/"+id)
    }
    
}
