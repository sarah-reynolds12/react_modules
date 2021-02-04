import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [color, setColor] =useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay]= useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] =useState('center');
    let styles = {
        color: color, 
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };
    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white')
    }
    const toggleBorder = () => {
        borderStyle === 'dashed' ? setBorderStyle('dotted') : setBorderStyle('dashed')
    }
    const toggleRadius = () => {
        borderRadius === '5px' ? setBorderRadius('15px') : setBorderRadius('5px')
    }
    const toggleBGColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('blue') : setBackgroundColor('purple')
    }

    return ( 
    <div className ="main">
        <div className = "mainDiv">
            <div style= {styles}>
            <FunctionalComponent string= "will this display?" function= {toggleColor} selectedStyle = {color} />
            <FunctionalComponent string= "am I doing this right?" function= {toggleBorder} selectedStyle = {borderStyle} />
            <FunctionalComponent string= "I hope so" function= {toggleRadius} selectedStyle= {borderRadius} />
            <FunctionalComponent string= "I need a job after this" function= {toggleBGColor}selectedStyle= {backgroundColor} />
            </div>
        </div>
    </div> );
};
 
export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle= {props.selectedStyle} />
        </div>
    );
};

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    );
};

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log("Can I see this in my dev tools?"),
    selectedStyle: 'what style??'
};

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
};