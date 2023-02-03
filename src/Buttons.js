function Buttons({filteredDishes}) {
    return(
        <div className="parents">
            <button className="buttonItem" onClick={() => filteredDishes('plate')}>Тарелки</button>
            <button className="buttonItem" onClick={() => filteredDishes('pan')}>Сковороды</button>
            <button className="buttonItem" onClick={() => filteredDishes('glass')}>Бокалы</button>
            <button className="buttonItem" onClick={() => filteredDishes('saucepan')}>Кастрюли</button>
            <button className="buttonItem" onClick={() => filteredDishes('knife')}>Ножи</button>
        </div>
    )
}

export default Buttons;