import React from 'react';
import axios from 'axios';

//MAKING A GET REQUEST USING AXIOOS
class PersonList extends React.Component {
    //State that variable declares on component
    state = {
        //object
        persons: []
    }

    //react-lifecycle componentDidMount()
    componentDidMount() {
        //Performing a GET request
        //Sample get request axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get('https://crudcrud.com/api/a19f1480fddf42739c2297b1570de3fb/persons')
        .catch(err => 
            console.log(err))
        .then(res => {
            //response object
            const persons = res.data;
            this.setState({persons});
        })
    }
    //react-lifecycle render()
    render() {
        return (
            <ul>
                {/*call a component */}
                {this.state.persons
                .map(person =>
                    //props
                <li key={person.id}>{person.name}</li>
                    )
                }
            </ul>
        )
    }
}

export default PersonList;

