import React, { Component } from 'react'
import Bodyitems from './Bodyitems'

export class Body extends Component {
  
    constructor() {
        super();
        console.log("Hii this is a constructor");
        this.state = {
          countries: [],
          loading: false
        };
      }
      async componentDidMount() {
        let url =
          "https://restcountries.eu/rest/v2/region/asia";     
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({countries: parsedata.countries});
      }
      render() {
        return (
          <div className="container ">
            <h3 className="my-3">TAsian Countries 💥</h3>
            <div className="row">
              {this.state.countries.map((element) => {
                return (
                  <div className="col-md-4">
                    <Bodyitems
                      name={element.name}
                      population={element.population}
                      Region={element.region}
                      SubRegion={element.subregion}
                      Capital={element.capital}
                      flag={element.flag}
                    ></Bodyitems>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
}

export default Body
