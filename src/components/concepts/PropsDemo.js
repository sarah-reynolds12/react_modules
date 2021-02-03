import React, { useState } from 'react';
import FunctionalComponentDemo from './FunctionalComponentDemo';

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
            <FunctionalComponent string= "will this display?" function= {toggleColor} />
            <FunctionalComponent string= "am I doing this right?" function= {toggleBorder} />
            <FunctionalComponent string= "I hope so" function= {toggleRadius} />
            <FunctionalComponent string= "I need a job after this" function= {toggleBGColor} />
            </div>
        </div>
    </div> );
}
 
export default PropsDemo;

const FunctionalComponent = (props) => {
    return (
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me!</button>
        </div>
    )
}