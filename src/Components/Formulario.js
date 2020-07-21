import React, { Component } from 'react';

import FormValidator from '../Utils/FormValidator';

import PopUp from '../Utils/PopUp';

import '../css/App.css';
import '../css/Formulario.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

class Formulario extends Component {

    constructor(props) {
        super(props);

        //criamos uma instância do validador e passamos:
        //o CAMPO que quero validar
        //e o MÉTODO que iremos utilizar pra validar
        this.validator = new FormValidator( [
            {
                field:'nome',
                method:'isEmpty',
                validWhen: false,
                message: 'Insira um nome correto!'
            },
            {
                field:'vocacao',
                method:'isEmpty',
                validWhen: false,
                message: 'Insira uma vocação correta!'
            },
            {
                field:'sexo',
                method:'isEmpty',
                validWhen: false,
                message: 'Insira uma identidade correta!'
            },
            {
                field:'level',
                method:'isInt',
                args: [{min: 0, max: 9999}],
                validWhen: true,
                message: 'Insira um level correto!'
            },
            {
                field:'mundo',
                method:'isEmpty',
                validWhen: false,
                message: 'Insira um mundo correto!'
            },
            {
                field:'residencia',
                method:'isEmpty',
                validWhen: false,
                message: 'Insira uma residência correta!'
            }
        ] );

        //salvando o estado inicial
        this.stateInicial = {
            nome:'',
            vocacao:'',
            sexo:'',
            level:'',
            mundo:'',
            residencia:'',
            validation: this.validator.isValid()
        }

        this.state = this.stateInicial;
    }

    //É responsável por ser o listener de eventos do botao de salvar
    inputListener = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
    }

    //função responsável por submeter os dados do formulário
    submitForm = () => {

        const validation = this.validator.validate(this.state);

        //Verifica se há erros de validação no forumlário
        if (validation.isValid) {
            this.props.submitListener(this.state);
            this.setState(this.stateInicial);
        } else { 
            const {nome, vocacao, sexo, level, mundo, residencia} = validation;
            const fields = [nome, vocacao, sexo, level, mundo, residencia];

            const invalidFields = fields.filter(elemt => {
                return elemt.isInvalid;
            });

            invalidFields.forEach(field => {
                PopUp.showMessage('error', field.message);
            });
        }
    }

    render() {

        const { nome, vocacao, sexo, level, mundo, residencia } = this.state;

        return (
            <form id="formulario" >
                <div id="formulario-title" className="text-center">Insira um personagem</div>
                <ColoredLine color="gray" />
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="nome" className="d-block"> Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            className="form-control"
                            value={nome}
                            onChange = {this.inputListener}/>
                    </div>

                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="vocacao">Vocação</label>
                        <input
                            id="vocacao"
                            type="text"
                            name="vocacao"
                            className="form-control"
                            value={vocacao}
                            onChange = {this.inputListener}/>
                    </div>
                    
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="sexo">Sexo</label>
                        <input
                            id="sexo"
                            type="text"
                            name="sexo"
                            className="form-control"
                            value={sexo}
                            onChange = {this.inputListener}/>
                    </div>

                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="level">Level</label>
                        <input
                            id="level"
                            type="text"
                            name="level"
                            className="form-control"
                            value={level}
                            onChange = {this.inputListener}/>
                    </div>
                        
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="mundo">Mundo</label>
                        <input
                            id="mundo"
                            type="text"
                            name="mundo"
                            className="form-control"
                            value={mundo}
                            onChange = {this.inputListener}/>
                    </div>
                        
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="residencia">Residência</label>
                        <input
                            id="residencia"
                            type="text"
                            name="residencia"
                            className="form-control"
                            value={residencia}
                            onChange = {this.inputListener}/>
                    </div>

                    <button onClick={this.submitForm} type="button" className="btn">Salvar</button>
                
                </div>
            </form>
        );
    }
}

export default Formulario;