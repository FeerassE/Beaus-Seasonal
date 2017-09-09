import React from 'react';
import {Link} from 'react-router-dom';

const BeerPage = ({props}) => {
    const link=`/beer/${props.beer.id}`;
    const stores = props.store.data.result.map((store) => {
        return (
            <li> 
                {store.name}
                {store.address_line_1}
            </li>
        )
    })
return (
    <Link to={link}>
        <div>
            <div className="beerPage">
                <h1>{props.beer.name}</h1>
                <img src={props.beer.image_thumb_url} />
                <ul>Stores Available:
                    {stores}
                </ul>
            </div>

        </div>
    </Link>
)
    
}

export default BeerPage;