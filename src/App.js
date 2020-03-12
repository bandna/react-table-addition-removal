import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [
            // {
            //     name: 'Charlie',
            //     job: 'Janitor',
            // },
            // {
            //     name: 'Mac',
            //     job: 'Bouncer',
            // },
            // {
            //     name: 'Dee',
            //     job: 'Aspiring Actress',
            // },
            // {
            //     name: 'Dennis',
            //     job: 'Bartender', 
            // }
        ],
    }

    removeCharacter = (index) => {
        const{characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState(({characters: [...this.state.characters, character]}))
    }

    render() {
        // const characters = [
        //     {
        //         name: 'Charlie',
        //         job: 'Janitor',
        //     },
        //     {
        //         name: 'Mac',
        //         job: 'Bouncer',
        //     },
        //     {
        //         name: 'Dee',
        //         job: 'Aspiring Actress',
        //     },
        //     {
        //         name: 'Dennis',
        //         job: 'Bartender', 
        //     }
        // ]

        return (
            <div className="container">
                <Table characterData = {this.state.characters} removeCharacter = {this.removeCharacter} />
                <Form handleSubmit = {this.handleSubmit} />
            </div>
        )
    }
}

//export the component to load it in index.js file.
export default App;