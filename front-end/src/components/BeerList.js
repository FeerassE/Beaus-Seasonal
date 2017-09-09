import React from 'react';
import BeerListItem from './BeerListItem.js';

const BeerList = (props) => {
    const beerItems = props.beers.map((beer) => {
        return (
            <BeerListItem 
            onBeerSelect= {props.onBeerSelect}
            key= {beer.product_no}
            beer = {beer}
            />
        )
    })
    return (
        <div>
            <h2 className='title'> Catalogue </h2>
            <ul className='row list-inline beer-list'>
                {beerItems}
            </ul>
        </div>
    )
}

export default BeerList;