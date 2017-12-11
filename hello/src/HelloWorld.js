import React, { Component } from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Kaio Cesar dos Santos',
            txt: this.props.txt
        }
    }

    render() {
        const result = 10
        const style = {
            color: '#FF0000',
            fontSize: 40
        }
        
        return (
            <div style={style} className="my-class-from-react">
                {/* this is my first component */}
                <StateInput />
                <h1>{this.state.txt}</h1>
                <h3>{ result === 2 * 5 ?  'É 10' : 'não é 10'}</h3>
            </div>
        )
    }
}

export default HelloWorld