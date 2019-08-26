import React, { Component } from 'react';


class ChooserNumber extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = "http://spevnik.smefata.sk/api/public/get/songs";
        const response = await fetch(url);
        const data = await response.json().then( posts =>{ this.setState({posts: posts})
        })
    }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < 5; j++) {
                children.push(this.state.posts )
             //   children.push(<td>{`Column ${j + 1}`}</td>)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }


    render() {
    return(
        <table>
            {this.createTable()}
        </table>
    )
}

}

export default ChooserNumber