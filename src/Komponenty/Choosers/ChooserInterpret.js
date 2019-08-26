import React, { Component } from 'react';

class ChooserInterpret extends Component {
    constructor(){
        super()
        this.state = {
            loading: true,

        }
    }

    async componentDidMount() {
        const url = "http://spevnik.smefata.sk/api/public/get/songs";
        //this.setState({loading: true})
        //  fetch(url)
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data[2],
            loading: false
        });
    }
    render(){
        // const text = this.state.loading ? "loading..." : this.state.character.title
        return(
            <div>
                {this.state.loading || !this.state.person ? (<div> loading... </div>) : (
                    <div> {this.state.person.artist}</div>
                )}
            </div>
        )
    }
}

export default ChooserInterpret