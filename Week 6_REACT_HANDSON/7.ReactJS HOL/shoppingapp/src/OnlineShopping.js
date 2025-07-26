import React from "react";
import { Cart } from "./Cart";
export class OnlineShopping extends React.Component{
    render(){
        const cartInfo=[{itemname:"Laptop",price:80000},
            {itemname:"TV",price:12000},
            {itemname:"Washing Machine",price:15000},
            {itemname:"Mobile",price:20000},
            {itemname:"Fridge",price:70000},
        ];
        return(
            <div className="mydiv">
                <h1>Items Ordered:</h1>
                <Cart items={cartInfo}></Cart>
            </div>
        )
    }
}