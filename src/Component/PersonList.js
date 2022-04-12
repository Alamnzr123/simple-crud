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
        axios.get('https://crudcrud.com/api/7608c564504349968773e6eccb124e84/persons')
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
                    <li key={person.id}>
                        {person.name}
                    </li>
                    )
                }

            </ul>
        
        )
    }
}

export default PersonList;