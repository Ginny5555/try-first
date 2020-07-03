export default class Product {
    id=0;
    image:any;
    title="";
    price=0;
    city="";
    rating=0;
    constructor(id:number,image:any, title:string,price:number,  city:string,
    rating=0){
        this.id=id;
        this.image=image;
        this.title=title;
        this.price=price;
        this.city=city;
        this.rating=rating;
    }
}