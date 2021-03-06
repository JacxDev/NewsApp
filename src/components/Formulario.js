import React, { Component, Fragment } from 'react';

class Formulario extends Component {
    state = {
        categoria : 'general'
    }

    cambiarCategoria = e => {
        this.setState({
            categoria : e.target.value
        }, () => {
            // Pasarlo a la pagina principal para general la consulta
            this.props.consultarNoticias(this.state.categoria);

        });

        
    }

    render(){
        return(
            <div className="buscador row"> 
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra tus noticias por categoria</h2>
                        <div>
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                <option value="general">General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Formulario;