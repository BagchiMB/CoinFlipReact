import React, {Component} from 'react'
import Ball from './Ball'
import './Lottery.css'

class Lottery extends Component
{
    constructor(props)
    {
        super(props)
        this.state={nos:[]}
        this.change=this.change.bind(this)
    }
    change(e)
    {
        console.log()
        let arr=[]
        for (let i = 0; i < this.props.Nballs; i++) 
        {

            arr.push(Math.floor(Math.random()*this.props.MaxNum))
        }
        console.log(arr)
        this.setState({nos:arr})
    }
    render()
    {
        return(
            <div className="Lottery">
                <h1>{this.props.name}</h1>
                <div className="Lottery-balls">
                    {this.state.nos.map(i => 
                        <Ball num={i} />
                        )}
                </div>
                <button onClick={this.change}>Roll it !</button>
            </div>
        );
    }
}

export default Lottery