import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css"
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import SearchTable from 'reactable-search';
import Columns from "./Columns";
import Song from "./Song";



class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            search:"",
            posts: [],
            value: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
        // const song = this.state.value;
        // this.props.onSearchTermChange(song);
        // this.setState({
        //     value: ''
        // });

        //toto je na mazanie zo searchu, treba doladit
        //https://stackoverflow.com/questions/46539480/react-clearing-an-input-value-after-form-submit/46539556
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

   async componentDidMount() {
        const url = "http://spevnik.smefata.sk/api/public/get/songs";
        const response = await fetch(url);
       const data = await response.json().then( posts =>{ this.setState({posts: posts})

            // const {search} = this.state;
            //
            // if(search!=="" &&  posts.title.indexOf(search) ===-1){
            //     return null
            // }
        })
    }
    // renderCountry = posts => {
    //     const {search} = this.state;
    // }
    // onchange= e => {
    //     this.setState({search: e.target.value})
    // };

    render(){
        const styles ={
            color: 'white',
            textAlign: 'center'
        };

        // const { search } = this.state;
        // const filtered = this.props.filter(posts => {
        //     return posts.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        // });
        const columns = [
            {
                Header: <b>Title</b>,
                accessor: "title",
                search: true,
                style: {
                    textAlign: "left"
                }
            },
            {
                Header: <b>Artist</b>,
                accessor: "artist",
            },
            {
                Header: <b>Tag</b>,
                accessor: "tags",
                sortable: false,
            },
            {
                Header: <b>Akcia</b>,
                accessor: "id",
                Cell: props => {
                    console.log(props.original.id);
                    return (
                        <Link to="Song"
                              params= { {id: props.original.id}}
                              type="button"
                              className="btn btn-primary"
                        ><i className="far fa-eye"></i></Link>
                    )
                },
                sortable: false,
                filterable: false,
            }
        ];
        return(
            <div>
                <nav className="Spevnik navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Spevník</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar navbar-dark bg-primary" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link style={styles} to="/home" className="HomeLink">Home</Link>
                                <a href="#/home" className="HomeLink"></a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link  to="/song" className="SongLink">Song</Link>
                                    <a href="#/song" class="song"></a>

                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Ikonka napr efaty</a>
                            </li>
                        </ul>

                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input className="form-inline bg-primary form-input"
                                       className="Search "
                                       type="search"
                                       placeholder="Search"
                                       aria-label="Search"
                                       style={{color: 'black'}}
                                       value={this.state.value}
                                       onChange={this.handleChange} />
                            </label>
                            <button className="btn btn-primary"
                                    type="submit"
                                    value="Search"
                                    onClick={"clicked"}
                            >Primary</button>
                        </form>
                    </div>
                </nav>
                <ReactTable
                    columns = {columns}
                    data = {this.state.posts}
                  //  filterable={}
                    defaultPageSize={30}
                    className="-striped -highlight"
                ></ReactTable>
            </div>
        )
    }
}
export default Home

// <ul>
// {this.props.   .map((contact)=> {
//         return <Contact contact = {contact} key ={contact.id}/>
//     })}
// </ul>
//
// <form onSubmit={this.handleSubmit}>
//     <label>
//     Name:
// <input style={inputStyle} type="text"
//        value={this.state.value} onChange={this.handleChange} />
// </label>
// <input type="submit" value="Submit" />
// </form>