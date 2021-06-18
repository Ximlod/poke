import React from "react";
import PropTypes from "prop-types"

const PropTypeComponente = ({name, dpi}) => {

    return(
        <h2>se esta enviando un proptypes : {`${name} / dpi: ${dpi}`}</h2>
    )
}

PropTypeComponente.propTypes = {
    name : PropTypes.string,
    edad : PropTypes.number.isRequired,
    dpi : PropTypes.number,
}

PropTypeComponente.defaultProps = {
    dpi:123123123123123,
}

export default PropTypeComponente;
/*

export default function PropTypeComponente({name, dpi}){

    return(
        <h2>se esta enviando un proptypes : {`${name} / dpi: ${dpi}`}</h2>
    )
}

PropTypeComponente.propTypes = {
    name : PropTypes.string,
    edad : PropTypes.number.isRequired,
    dpi : PropTypes.number,
}

PropTypeComponente.defaultProps = {
    dpi:123123123123123,
}
*/