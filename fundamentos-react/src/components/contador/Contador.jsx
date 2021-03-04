import "./Contador.css";
import React, { Component } from 'react';

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1,
    }
        

    inc = () =>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <label>Passo: </label>
                <input onChange={this.setPasso}/>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}

export default Contador;