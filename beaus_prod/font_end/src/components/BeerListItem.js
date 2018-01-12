import React from 'react';
import {Link} from 'react-router-dom';


// Component for individual catalogue item
const BeerListItem = ({beer, onBeerSelect}) => {
    const imageUrl = beer.image_thumb_url;
    const beerName = beer.name;
    const style = beer.style;
    const varietal = beer.varietal;
    const tertiaryCategory= beer.tertiary_category;
    const beerId = beer.id;

    // No image available
    if(imageUrl == null){
        return (
            <li className= 'list-beer-item-img col-xs-12 col-md-3'>
                <Link to={`/beer/${beerId}`}>
                    <div className='box-unavailable'>
                        <p> {beerName}</p>
                    </div>
                    <h3>{beerName}</h3>
                </Link>
                    <p>{tertiaryCategory}</p>
                    <p>{style}</p>
                    <p>{varietal}</p>
                
            </li>
        )
    }
    // Image available
    else {
    return(
        <li className= 'list-beer-item col-xs-12 col-md-3'>
            <Link to={`/beer/${beerId}`}>
                <img className="media-object" src={imageUrl}/>
                <div>
                    <h3>{beerName}</h3>
                </div>
            </Link>
                <p>{tertiaryCategory}</p>
                <p>{style}</p>
                <p>{varietal}</p>
            
        </li>
        )
    }
}

export default BeerListItem;