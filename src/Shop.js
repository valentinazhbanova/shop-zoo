import { useState } from "react";
import { dataSlides } from "./dataSlides";
import './App.css';

function Shop() {
    const [dishes, setDishes] = useState(0);
    const {image} = dataSlides[dishes];

    const text = 'Компания «Блеск» – один из ведущих мировых производителей качественной посуды и аксессуаров для кухни. На сегодняшний день мы занимаем первое место по количеству магазинов посуды и товаров для дома в России. Мы используем новейшие технологии и разработки. Постоянно совершенствуем продукцию на основе анализа потребностей клиента. Продукция изготовлена только из качественных, экологически чистых материалов. Ежегодно компания выпускает более 100 новинок.'

    const [showMore, setShowMore] = useState(false);

    const perviousDishes = () => {
        setDishes((dishes => {
            dishes --;
            if(dishes < 0) {
                return dataSlides.length -1;
            }
            return dishes;
        }))

    }

    const nextDishes = () => {
        setDishes((dishes => {
            dishes ++;
            if (dishes > dataSlides.length -1) {
                dishes = 0;
            }
            return dishes;
        }))
    }

    return(<div>
        <div className="cont">
            <h1>Магазин посуды "Блеск"</h1>
        </div>
        <div className="cont">
            <img src={image} width='900px' height='500px' alt='dishes'/>
        </div>
        <div className="btn cont">
            <button onClick={perviousDishes}>ПРЕДЫДУЩИЙ</button>
            <button onClick={nextDishes}>СЛЕДУЮЩИЙ</button>
        </div>
        <div className="cont">
            <p>{showMore ? text : text.substring(0,171) +'.....'}
            <button className="btnShowMore" onClick={() => setShowMore(!showMore)}>{showMore ? 'Свернуть' : 'См. далее'}</button>
            </p>
        </div>
        </div>
    )
}

export default Shop;
