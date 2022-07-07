import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Icategory } from "./General";

@Injectable()
export class Category{


constructor(private http:HttpClient){
    
}

ngOnInit():void{
 }

getAllCategory():Observable<Array<Icategory>>{
    return this.http.get<Array<Icategory>>("http://souq.alishahin.net//api/Categories")
};



addCategory(cat:Icategory){
}


getCategoryById(id:number , list:Array<Icategory> ):any{

    for(let i=0; i<list.length; i++)
    {
        if(list[i].CategoryId==id)
            return list[i];
    }

}

}