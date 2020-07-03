import validator from 'validator';

class FormValidator {

    constructor(validations) {
        this.validations = validations;
    }

    validate(state) {

        let validation = this.isValid();

        this.validations.forEach(rule => {

            //Definindo as variáveis recebidas
            const fieldValue = state[rule.field.toString()];
            const args = rule.args || [];
            const methodValidation = typeof rule.method === 'string' ?
            validator[rule.method] : rule.method
    
            //Responsável por administrar as validações declaradas no Formulario.js
            if(methodValidation(fieldValue, ...args, state) !== rule.validWhen) {
                validation[rule.field] = {
                    isInvalid: true,
                    message: rule.message
                }
                validation.isValid = false;
                console.log('nao deu certo, amigao!');
            }
        });

        return validation;
    }

    //Criando um json que retorna se o formulário é válido.
    isValid() {
        const validation = {};

        this.validations.map(rule => (
            validation[rule.field] = {isInvalid: false, message: ''}
        ));

        return {isValid: true, ...validation};
    }
}

export default FormValidator;