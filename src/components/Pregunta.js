import React, { Fragment,useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto,guardarRestante,actulizarPregunta}) => {
    //definir el state 
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError]= useState(false);


    //Funciones
    const definirPresupuesto = e=>{
        guardarCantidad(parseInt(e.target.value,10))
    }

    //Submit
    const agregarPresupuesto = e=>{
        e.preventDefault();
        //VAlidar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //Si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actulizarPregunta(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto"/> :null}
            <form 
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number"
                className="u-full-width"
                placeholde="Coloca tu presupuesto"
                onChange={definirPresupuesto}
                />
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                
                />
            </form>
        </Fragment>
      );
}
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actulizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;
