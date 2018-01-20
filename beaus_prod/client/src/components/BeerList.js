import React, {Component} from 'react';
import BeerListItem from './BeerListItem.js';
import axios from 'axios';

// The catalogue of beers. 
class BeerList extends Component{

    state = {
        beers: [],
        store: [],
    }
    componentWillMount(){
        
        axios.get(`/beerlist`).then((res) => {
            this.setState({beers: res.data.result});
            console.log(this.state.beers);
            }).catch(error => {
            console.log(error);
            })
    }

    // Creates a block of list items by passing each beers data element to the BeerListItem component
    beerItems = () =>{
        return(
            this.state.beers.map( beer => {
                return(
                    <BeerListItem 
                    onBeerSelect= {()=>this.onBeerSelect(beer)}
                    key= {beer.product_no}
                    beer = {beer}
                    />
                    )
                }
            )
        )
    }

    render(){
        return(
            <div>
                <div>
                    <h2 className='title'> Catalogue </h2>
                    <ul className='row list-inline beer-list'>
                        {this.beerItems()}
                    </ul>
                </div>
        </div>
        )
    }
}

export default BeerList;