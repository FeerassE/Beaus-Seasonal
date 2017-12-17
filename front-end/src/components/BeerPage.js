import React, {Component} from 'react';
import axios from 'axios';

// Individual Product Page featuring Store info
class BeerPage extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            stores: [],
            beer: []
        }
    }
    
// Store data and product data added before mounting

      componentWillMount(){
            let id = this.props.match.params.id;
            console.log(id);
            axios.get(`http://localhost:8080/beer/store/${id}`).then((res) => {
            this.setState({stores: res.data.result});
            console.log(this.state.stores);
            }).catch(error => {
            console.log(error);
            }).then(axios.get(`http://localhost:8080/beer/${id}`).then((res) => {
                this.setState({beer: res.data.result});
                console.log("beer data:");
                console.log(this.state.beer);
            }).catch(error => {
                console.log(error)
                console.log(this.props.match.params.id);
            }))
            
  }

    render(){
        return(
            <div>
                <h1>{this.state.beer.name}</h1>
                <img src={this.state.beer.image_thumb_url} />
                <p>Available in these stores:</p>
                <ul>
                    {this.state.stores.map((store) => {return <li>{store.name}</li>}) }
                </ul>
            </div>
        )
    }
}

export default BeerPage;