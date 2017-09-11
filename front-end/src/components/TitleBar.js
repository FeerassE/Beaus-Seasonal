import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const TitleBar = () => {
    return (
            <nav className="navbar navbar-default fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/">
                  <a className="navbar-brand" href='/'>
                    <img alt="Brand" src="./beaus-beige-logo.svg"/>
                  </a>
                  <h1 className="navbar-text"> Beau's Seasonal </h1>
                </Link>
              </div>
            </div>
          </nav>
    )
}

export default TitleBar;