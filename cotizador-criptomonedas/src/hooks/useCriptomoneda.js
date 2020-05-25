import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectCripto = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    //

    //State de nuestro custom Hook
    const [state, actualizarState] = useState(stateInicial);

    const SeleccionarCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <SelectCripto
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione--</option>
                {opciones.map(opcion=>(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </SelectCripto>
        </Fragment>
    );

    //Retornar state, interfaz y fnc que modifica el state.
    return [state, SeleccionarCripto, actualizarState];

}

useCriptomoneda.propTypes = {
    label: PropTypes.string,
    stateInicial: PropTypes.object.isRequired,
    opciones: PropTypes.object.isRequired
}

export default useCriptomoneda;

