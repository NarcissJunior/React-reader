import React, { Component, Fragment } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';

import ApiService from './api/ApiService';

class App extends Component {

    state = {
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
        ]
    };

    removePersonagem = index => {

    const { personagens } = this.state;

    //Verifica qual foi a posição clicada (pois o array será percorrido em todas as posições)
    //Após isso, ele retorna quais posições deverão ser mantidas.
    this.setState(
        {
            personagens : personagens.filter((personagem, posAtual) => {
            //quando o index for igual á posição atual (clicada) o elemento será retirado.
            return posAtual !== index;
            }),
        }
    );
    PopUp.showMessage("error", "Personagem removido com sucesso!");
  }

    submitListener = personagem => {
        this.setState({ personagens : [...this.state.personagens, personagem] });
        PopUp.showMessage("success", "Personagem adicionado com sucesso!");
    }

    render () {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>React Reader</h1>
                    <Tabela personagens = { this.state.personagens } removePersonagem = { this.removePersonagem } />
                    <Form submitListener = { this.submitListener } />
                </div>
            </Fragment>
        );
  }

}

export default App;
