import React from 'react';
import API from '../api';

//MAKING A DELETE REQUEST USING AXIOOS
class PersonRemove extends React.Component {
    //State that variable declares on component
    state = {
        //object
        id:""
    }

    //function handleChange
    handleChange = event => {
        //call state at the function
        this.setState({ id:event.target.value });
    }

    //function handleSubmit
    handleSubmit = event => {
        //HTML DOM event method


        //Performing a DELETE request
        //Sample post request axios.get(`https://jsonplaceholder.typicode.com/users/$`)
        API.delete(`persons/${this.state.id}`)
        //receive a response
        .catch(err => 
            console.log(err))
        .then(res => {
        console.log(res);
        console.log(res.data);
        })   
    }

    //react-lifecycle render()
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input type="text" name="id" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default PersonRemove;