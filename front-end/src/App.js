import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import $ from 'jquery';
import {Switch, Router} from 'react-router-dom';

import TitleBar from './components/TitleBar';
import BeerList from './components/BeerList';
import BeerPage from './components/BeerPage';

const apiKey = 'MDo2NGY4MDgzMi04OWQ3LTExZTctOWM0OS1mN2VkOWI0NDI4MjU6a09uZFhqQU9DZ2YweDBiZGFoZ1JOSlVFT0o3SmVGeTB1b3kx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      beer: [],
      store: [],
      page: []
    }
    this.onBeerSelect = this.onBeerSelect.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:8080').then((res) => {
      this.setState({data: res.data.result});
      console.log(this.state);
    }).catch(error => {
      console.log(error);
    })


  }
  // componentWillMount(){
  //   axios.get(`http://localhost:8080/beer/store/${beer_id}`).then((res) => {
  //     this.setState({store: res});
  //     console.log(this.state);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }
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


  render() {
    return (
      <div className="App">
        <TitleBar />
        <BeerList 
        onBeerSelect={this.onBeerSelect}
        beers={this.state.data} />
        {/* <BeerPage 
        store={this.state.store}
        beer={this.state.beer}
        /> */}

      </div>
    );
  }
}

export default App;
