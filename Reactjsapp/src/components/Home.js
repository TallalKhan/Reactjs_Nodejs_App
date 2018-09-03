import React, { Component } from 'react';
import { FaChartLine } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { css } from 'react-emotion';
import { GridLoader} from 'react-spinners';

import "../App.css";
import { Route } from 'react-router-dom'
class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: [],
      error: null,
     
    };
  }

 
  componentDidMount() {
    this.getData();

  }
 
  
  getData() {

    this.setState({
      isLoading: true
    });

    fetch("http://localhost:2000/api/getList")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoading: false,
            items: result.data
          });
        },
        (error) => {
          console.log(error)
          this.setState({
            isLoading: false,
            error
          });
        }
      )
  }


  render() {

    const { error, isLoading, items } = this.state;



    if (error) {
      console.log(error);
      return <div>Some Error while loading data!!  </div>;
    }
    else if (isLoading) {
      // loading
      return<div className="loading"><div className='spinner'>
      <GridLoader
       
        sizeUnit={"px"}
        size={25}
        color={'#ff9900'}
        loading={this.state.loading}
      />
      </div>
    </div> 
    
    } else {

      return (
        <div>
       <ion-icon name="trending-up" />

          <section id="content">
            <div className="container">
              <div id="Main">
                <div id="center">
                  <h3>
                    <FaChartLine /> TrendingProducts
                </h3>
                

                 <ul>
                    {(() => {
                      let container = [];
                      for (var i = 0; i < items.length; i++) {

                        var link = "/detail/"+items[i]._id
                        

                        container.push(
                          <li>
                            <div class="img">
                              <img src={items[i].picture} alt="logo" />
                            </div>
                            <div className="info">
                              <a className="title"> {items[i].title} </a>

                              <div className="price">
                                <span className="st">Our price:</span>
                                <strong>{items[i].price}</strong>
                              </div>
                              <div class="actions">
                                <NavLink to = {link}   >Details</NavLink>
                              </div>
                            </div>
                          </li>
                        );
                      }
                      return container;
                    })()}


                


                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div id="fixedbutton" >  
     <Route render={({ history}) => (
      <button className="AddItem"
      type='button'
      onClick={() => { history.push('/AddItem') }}
      >
      Add Item
      </button>
      )} />
</div>
        </div>
      );

    }
  }
};

export default Home;
