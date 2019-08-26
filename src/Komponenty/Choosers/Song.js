import React, { Component } from 'react';

import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Song extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        axios.post(`/api/public/get/song/${params.id}`)
            .then(({ data: user }) => {
                console.log('user', user);

                this.setState({ user });
            });
    }
    // async componentDidMount() {
    //     const url = "http://spevnik.smefata.sk/api/public/get/song";
    //     const response = await fetch(url);
    //     const data = await response.json().then( posts =>{ this.setState({posts: posts})
    //     })
    // }

    render() {
        const styles ={
            color: 'white',
            textAlign: 'center'
        };
            return(
                <Route path="/song/:id" component={Song}/>
            )
    }
}

export default Song