import React, { Component } from "react";

export class Bodyitems extends Component {
  render() {
    let {name,Languages,flag,population,Region,SubRegion,Capital}= this.props
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
          <img src={flag} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
             {Languages}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Total Population {population}</strong></li>
            <li class="list-group-item"><strong>Region {Region}</strong></li>
            <li class="list-group-item"><strong>Sub-Region {SubRegion}</strong></li>
            <li class="list-group-item"><strong>Capital {Capital}</strong></li>
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Bodyitems;
