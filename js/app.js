'use strict'; //

const ReactElement = React.createElement;

export default class Button extends React.Component {
    // no puedo escribir el render
    /* render(){
        return(
            <div>
                <label>Hello there</label>
                <button class='Button'>Hello Button World from React</button>
            </div>
        )
    } */

    render() {
        return ReactElement(
            'button',
            {},
            'Super Botón'
        )
    }
}

const domContainer = document.getElementById('myApp');
ReactDOM.render(ReactElement(Button), domContainer);