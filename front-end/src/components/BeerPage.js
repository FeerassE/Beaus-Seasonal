import React from 'react';

const BeerPage = ({props}) => {
    const stores = props.store.data.result.map((store) => {
        return (
            <li> 
                {store.name}
                {store.address_line_1}
            </li>
        )
    })
return (
    <div>
        <div className="beerPage">
            <h1>{props.beer.name}</h1>
            <img src={props.beer.image_thumb_url} />
            <ul>Stores Available:
                {stores}
            </ul>
                
        </div>
    </div>
)
    
}

export default BeerPage;