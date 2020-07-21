import React, { Component, Fragment } from 'react';

import Header from '../Components/Header';
import DataTable from '../Components/DataTable';
import ApiService from '../Api/ApiService';

import PopUp from '../Utils/PopUp';

class Personagem extends Component {
    
    constructor(props) {
        super (props);

        this.state = {
        names: [],
        title: 'characters'
        };
    }

    componentDidMount() {
    ApiService.ShowNames()
            .then(res => {
                if(res.message === 'success') {
                    this.setState({names: [...this.state.names, ...res.data]})
                }
            })
            .catch(err => PopUp.showMessage("error", "Erro ao carregar a lista de personagens."));
    }

    render() {
        return (
        <Fragment>
            <Header />
            <div className="container">
                <h1>Personagens</h1>
                <DataTable data={this.state.names} title={'Nome'} columns={['nome']} />
                </div>
        </Fragment>
        );
    };
}
export default Personagem;