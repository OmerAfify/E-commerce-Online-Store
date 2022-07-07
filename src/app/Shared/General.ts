
export interface Iitems{
    ItemId: number,
    ItemName: string,
    SalesPrice: number,
    CategoryName?: string,
    PurchasePrice:number,
    ImageName: string,
    CategoryId?: number
}

export interface IcartItems{
    ItemId: number,
    ItemName: string,
    SalesPrice: number,
    CategoryName?: string,
    PurchasePrice:number,
    ImageName?: string,
    CategoryId?: number,
    Quantity:number,
    TotalPrice:number
}

export interface Icategory{
CategoryId:number,
CategoryName:string
}

