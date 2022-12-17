import React from 'react'
import PropTypes from 'prop-types'

export default function Icon(props) {
    return (
        <img src={props.src} alt="icon"></img>
    );
}

Icon.propTypes = {
    src: PropTypes.string.isRequired,
}