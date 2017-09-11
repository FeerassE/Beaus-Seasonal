import React, {Component} from 'react';
import BeerListItem from './BeerListItem.js';
import axios from 'axios';


class BeerList extends Component{

    state = {
        beers: [],
        store: [],
    }
    componentWillMount(){
        axios.get('http://localhost:8080').then((res) => {
            this.setState({beers: res.data.result});
            console.log(this.state.beers);
            }).catch(error => {
            console.log(error);
            })
    }

    onBeerSelect(beer, e){
        let beer_id = beer.id;
        this.setState({beer: beer});
        axios.get(`http://localhost:8080/beer/store/${beer_id}`).then((res) => {
          this.setState({store: res});
          console.log(this.state);
        }).catch(error => {
          console.log(error);
        })
      }


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
                {/* <NewBeerPage beer={this.state.beer} /> */}
        </div>
        )
    }
}

export default BeerList;