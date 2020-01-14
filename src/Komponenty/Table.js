    import React from "react";
import Home from "./Choosers/Home";
import ChooserTag from "./Choosers/ChooserTag";
import ChooserInterpret from "./Choosers/ChooserInterpret"

function Table() {
    return (
        <header className="App-header">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Názov</th>
                    <th scope="col">Interpret</th>
                    <th scope="col">Tagy</th>
                    <th scope="col">#</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row"></th>
                    <td><ChooserInterpret/></td>
                    <td><ChooserTag/></td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                </tbody>
            </table>
            <p>
                Ahoj Janko :)
                <b>
                    Boh ti vela zehna!
                </b>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <i className="fas fa-cross" style={{color: "#000"}}></i>
        </header>
    )
}

export default Table