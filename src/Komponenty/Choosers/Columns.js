import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css"


class Columns extends React.Component {
  constructor(){
      super()
  }
   render(){

    const columns = [
        {
            Header: <b>Title</b>,
            accessor: "title",
            style: {
                textAlign: "left"
            },
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
            Cell: props => {
                return (
                    <button type="button" className="btn btn-primary"
                            onClick={() => {
                                console.log("props", props)
                            }}
                    ><i className="far fa-eye"></i></button>
                )
            },
            sortable: false,
            filterable: false,
        }
    ]
       return({columns})
   }
}
export default Columns