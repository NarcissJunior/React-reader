import React, { Component, Fragment } from 'react';

import Header from './Header';
import DataTable from './DataTable';
import ApiService from './api/ApiService';

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
                .then(res =>{
                  this.setState({names: [...this.state.names, ...res.data]})
                });
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