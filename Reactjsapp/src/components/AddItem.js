import React, { Component } from 'react';
import "../App.css";
import "../Detail.css";
import "../AddItem.css";
import { Route } from 'react-router-dom'
class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
     
            value:'',
            name:'',
            price:'',
            Display_Size:'',
            Resolution:'',
            RAM:'',
            Processor:'',
            ROM:'',
            pic:''
    
    
    };
        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        
        //price
        if(!fields["price"]){
          formIsValid = false;
          errors["price"] = "Cannot be empty";
       }

      
       //DisplaySize
       if(!fields["Display_Size"]){
        formIsValid = false;
        errors["Display_Size"] = "Cannot be empty";
     }

//Resolution
if(!fields["Resolution"]){
  formIsValid = false;
  errors["Resolution"] = "Cannot be empty";
}
// RAM
if(!fields["RAM"]){
  formIsValid = false;
  errors["RAM"] = "Cannot be empty";
}

// Processor
if(!fields["Processor"]){
  formIsValid = false;
  errors["Processor"] = "Cannot be empty";
}
//ROM
if(!fields["ROM"]){
  formIsValid = false;
  errors["ROM"] = "Cannot be empty";
}
//pic
if(!fields["pic"]){
  formIsValid = false;
  errors["pic"] = "Cannot be empty";
}

       this.setState({errors: errors});
       return formIsValid;
   }
      handleChange(field,event) {
        
        

          let fields = this.state.fields;
          fields[field] = event.target.value;        
          this.setState({fields});

      
        
       
        console.log("This.State"+this.state);
      }
      
      handleSubmit(event) {
        event.preventDefault();

        let databody = {
         
              "title": this.state.fields["name"],
              "price": this.state.fields["price"],
              "display_size": this.state.fields["Display_Size"],
              "Resolution": this.state.fields["Resolution"],
               "RAM": this.state.fields["RAM"],
              "processor": this.state.fields["Processor"],
              "Rom": this.state.fields["ROM"],
              "picture": this.state.fields["pic"],
      }
        if(this.handleValidation()){
    
          alert("Form submitted. Check HomePage for new item added!!");

          fetch("http://localhost:2000/api/addProduct", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));
            
        


       }else{
          alert("Form has errors. Form not submitted!!")
       }


        alert('A name has value: ' + this.state.fields["name"]+
        ' \nA price has value: ' + this.state.fields["price"]+
        ' \nA DisplaySize has value: ' + this.state.fields["Display_Size"]+
        ' \nA Resolution has value: ' + this.state.fields["Resolution"]+
        ' \nA RAM has value: ' + this.state.fields["RAM"]+
        ' \nA processor has value: ' + this.state.fields["Processor"]+
        ' \nA ROM has value: ' + this.state.fields["ROM"]+
        ' \nA Picture Link is: '+this.state.fields["pic"])
        
       
        event.preventDefault();
      }



    render() {
  return (
    
    
  <form onSubmit={this.handleSubmit} method="post">

    <div className="column" >
  

  <table>
    <tr>
      <th>Name</th>
      <th>  <input name="name" placeholder="Dell, HP etc" value={this.state.fields["name"]} onChange={this.handleChange.bind(this, "name")}  /></th>
       
    </tr>
    
    <tr>
      <td>Price</td>
      <td>  <input name="price" placeholder="$1234" value={this.state.fields["price"]} onChange={this.handleChange.bind(this, "price")}  type="text"/></td>
    </tr>
    <tr>
      <td>Display Size</td>
      <td>  <input name="Display_Size" placeholder="HD,2K etc" value={this.state.fields["Display_Size"]} onChange={this.handleChange.bind(this, "Display_Size")} type="text" /></td>
    </tr>
    <tr>
      <td>Resolution</td>
      <td>  <input name="Resolution" placeholder="1920*1080" value={this.state.fields["Resolution"]} onChange={this.handleChange.bind(this, "Resolution")}  type="text"/></td>
    </tr>
    <tr>
      <td>RAM</td>
      <td>   <input name="RAM" placeholder="4 GB" value={this.state.fields["RAM"]} onChange={this.handleChange.bind(this, "RAM")} type="text" /></td>
    </tr>
    <tr>
      <td>Processor</td>
      <td>  <input name="Processor" placeholder="i5" value={this.state.fields["Processor"]} onChange={this.handleChange.bind(this, "Processor")} type="text" /></td>
    </tr>
    <tr>
      <td>ROM</td>
      <td>  <input name="ROM" placeholder="500 GB" value={this.state.fields["ROM"]} onChange={this.handleChange.bind(this, "ROM")} type="text" /></td>
    </tr> 
    <tr>
      <td>Picture Link</td>
      <td>  <input type="text"placeholder="Picture URL" name="pic" accept="image/*" value={this.state.fields["pic"]} onChange={this.handleChange.bind(this, "pic")}  /></td>
    </tr> 

    
  </table>
  
  <input type="submit" value="Submit" />
    </div>
  
  
  </form>

  );
}
};


export default AddItem;