import React, { Component } from 'react'


class Events extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            data: []
        }

        this.updateInputName = this.updateInputName.bind(this)
        this.clickEvent = this.clickEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
    }

    clickEvent(e) {
        this.state.data.push(this.state.name)
        return this.setState({
            name: ''
        })
    }

    deleteEvent(item) {
        const newData = this.state.data
        if (newData.indexOf(item) >= 0) {
            newData.splice(newData.indexOf(item), 1)
            this.setState({
                data: newData
            })
        }
    }

    updateInputName(e) {
        return this.setState({
            name: e.target.value
        })
    }

    render() {
        const items = this.state.data.map((item) => {
                return <li key={item}>{item.toString()}
                    <button type="button" onClick={this.deleteEvent.bind(this, item)}>X</button>
                </li>
            })

        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.updateInputName} />
                <h1>{this.state.name}</h1>
                <button type="button" name="name" onClick={this.clickEvent}>Submit</button>

                <ul>
                    {items}
                </ul>

            </div>
        )
    }
}


export default Events