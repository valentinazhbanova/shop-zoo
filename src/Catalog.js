import { useState } from "react";
import { dataCatalog } from './dataCatalog';
import './App.css';
import CatalogItem from "./CatalogItem";
import Buttons from "./Buttons";


function Catalog() {
    const [dishesItem, setDishesItem,] = useState(dataCatalog);
    
    const chosenDishes = (searchTerm) => {
        const newDishes = dataCatalog.filter(element => element.searchTerm === searchTerm);
        setDishesItem(newDishes);
    }

    return(
        <div>
            <Buttons filteredDishes = {chosenDishes}/>
            <CatalogItem buyDishes = {dishesItem}/>
        </div>
    ) 
}

export default Catalog;