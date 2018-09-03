
import React, { Component } from 'react';
import "../App.css";
import "../Detail.css";
import { css } from 'react-emotion';
import { GridLoader} from 'react-spinners';

class Detail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      item: [],
      error: null
    };
  }

  componentDidMount(){
    // console.log(this.props.match.params.id);

    this.getData("http://localhost:2000/api/getProductDetail/"+this.props.match.params.id)
  }


  getData(url) {

    this.setState({
      isLoading: true
    });

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoading: false,
            item: result
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

    const { error, isLoading, item } = this.state;



    if (error) {
      console.log(error);
      return <div>Some Error while loading data!!  </div>;
    }
    else if (isLoading) {
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

<h3>specifications</h3>
        
<div className="row">
  <div className="column" >
  <img src={item.picture} alt="logo" className = "img" />
  </div>



  <div className="column" >
  

<table>
  <tr>
    <th>Name</th>
    <th>{item.title}</th> 
  </tr>
  <tr>
    <td>Price</td>
    <td>{item.price}</td>
  </tr>
  <tr>
    <td>Display Size</td>
    <td>{item.display_size}</td>
  </tr>
  <tr>
    <td>Resolution</td>
    <td>{item.Resolution}</td>
  </tr>
  <tr>
    <td>RAM</td>
    <td>{item.Ram}</td>
  </tr>
  <tr>
    <td>Processor</td>
    <td>{item.processor}</td>
  </tr>
  <tr>
    <td>ROM</td>
    <td>{item.Rom}</td>
  </tr>
</table>


  </div>
</div>


        
        
        </div>
    );
  }

  }
};

export default Detail; 