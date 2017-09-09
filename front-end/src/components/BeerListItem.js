import React from 'react';
import {Link} from 'react-router-dom';

const BeerListItem = ({beer, onBeerSelect}) => {
    const imageUrl = beer.image_thumb_url;
    const beerName = beer.name;
    const style = beer.style;
    const varietal = beer.varietal;
    const tertiaryCategory= beer.tertiary_category;
    if(imageUrl == null){
        return (
            <li onClick={() => onBeerSelect(beer)} className= 'list-beer-item-img col-xs-12 col-md-3'>
                {/* <Link to={`/beer/${beerName}`}> */}
                    <div className='box-unavailable'>
                        <p> {beerName}</p>
                    </div>
                    <h3>{beerName}</h3>
                    <p>{tertiaryCategory}</p>
                    <p>{style}</p>
                    <p>{varietal}</p>
                {/* </Link> */}
            </li>
        )
    }
    else {
    return(
        <li onClick={() => onBeerSelect(beer)} className= 'list-beer-item col-xs-12 col-md-3'>
            {/* <Link to={`/beer/${beerName}`}> */}
                <img className="media-object" src={imageUrl}/>
                <div>
                    <h3>{beerName}</h3>
                    <p>{tertiaryCategory}</p>
                    <p>{style}</p>
                    <p>{varietal}</p>
                </div>
            {/* </Link> */}
        </li>
        )
    }
}

export default BeerListItem;