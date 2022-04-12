import React from 'react';
import axios from 'axios';

//MAKING A POST REQUEST USING AXIOOS

class PersonAdd extends React.Component {
    //State that variable declares on component
    state = {
        //object
        name: ""
    }

    //function handleChange
    handleChange = event => {
        //call state at function
        this.setState({
            //object
            name: event.target.value
        });
    }

    //function handleChange
    handleSubmit = event => {
        //HTML DOM event method
        event.preventDefault();
        
        //creat variable
        const user = {
            //object
            name: this.state.name
        };
        //Performing a POST request
        //Sample post request axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.post('https://crudcrud.com/api/a19f1480fddf42739c2297b1570de3fb/persons', {user})
        //receive response
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    //react-lifecycle render()
    render(){
        return(
            //create JSX Form
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />                    
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>

        )
    }
}

export default PersonAdd;