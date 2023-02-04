function CatalogItem({buyDishes}) {
    return(
        <div className="parents">
            {buyDishes.map((element => {
            const {id, name, price, image} = element;
            return(
                <div key={id}>
                    <div  className='parentsItem'>
                        <img src={image} width='370px' height='330px' />
                        <h3>{name}</h3>
                        <h3>{price} руб.</h3>
                    </div>
                </div>
            )
        }))}
        </div>
    )
}

export default CatalogItem;
