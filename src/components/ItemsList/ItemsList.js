import React from 'react';

import './ItemsList.css'
import SwapiService from '../../services/SwapiService';

export default class ItemsList extends React.Component {

    swapi = new SwapiService();

    state = {
        people: null,
    }

    componentDidMount() {
        this.swapi.getAllPeople().then((people) => {
            this.setState({
                people
            })
        });
    }

    render() {
        console.log(this.state.people);
        return(
            <ul className="ItemsList">
                <li>
                    First preson
                </li>
                <li>
                    Second preson
                </li>
                <li>
                    Third preson
                </li>
            </ul>
        );
    }
}