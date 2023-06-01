import {createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductContext = createContext({
    products : [],
});

export const ProductProvider = ({children}) =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA)
    },[])

    useEffect(()=>{
        const getcategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap)
        };
        getcategoriesMap();
    },[])

    const value = {products}
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}