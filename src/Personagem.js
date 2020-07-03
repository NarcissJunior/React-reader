import React, { Component, Fragment } from 'react';

import Header from './Header';
import DataTable from './DataTable';

class Personagem extends Component {
    
    constructor(props) {
        super (props);

        this.state = {
          personagens: [
            {
                nome: 'Genji',
                vocacao: 'Paladin',
                sexo: 'male',
                level: '100',
                mundo: 'Belobora',
                residencia: 'thais',
            },
            {
                nome: 'Zenyatta',
                vocacao: 'Druid',
                sexo: 'male',
                level: '500',
                mundo: 'Gentebra',
                residencia: 'thais',
            }
          ],
          title: 'Personagens'
        };
    }
    render() {
        return (
          <Fragment>
              <Header />
              <div className="container">
                  <h1>Personagens</h1>
                  <DataTable data={this.state.personagens} title={'Nome'} columns={['nome']} />
                  </div>
          </Fragment>
        );
    };
}
export default Personagem;