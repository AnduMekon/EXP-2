import React from 'react';
import ReactDOM, { render } from 'react-dom';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props); 
            this.toggelVisibility = this.toggelVisibility.bind(this);
            this.state = {
                visibility: false,
                options:['Megersa', 'tolosa','feysa','ararsa'] 
            }
    }

    toggelVisibility() {
        this.setState((prevState)=> {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    handleVsi(){

    }
    render() {

        return (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.toggelVisibility} >
                {this.state.visibility ? 'Hide details' : 'show details' }</button>
                    <div>
                    {this.state.visibility && (<p> {this.state.options[0]}</p>)}
                    {this.state.options.map((option)=> <li key={option}>{option}</li>)}
                    </div>
            </div>
            
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))








/*class Counter extends React.Component {
    constructor(prop) {
        super(prop);
            this.handleAdd = this.handleAdd.bind(this);
            this.handleMins = this.handleMins.bind(this);
            this.handleRest = this.handleRest.bind(this);
            this.state = {
                Count: 0
            }
    }
    handleAdd() {
    this.setState((prevState)=>{
        return {
            Count: prevState.Count + 1
        }
    })
       
        
    }
    handleMins(){

       this.setState((prevState)=> {
           return {
               Count: prevState.Count - 1
           }
       })
    }
    handleRest() {
        this.setState(()=>{
            return {
                Count: 0
            }
        })
    }
    render() {
        return (
            <div> 
                <h1>Count:{this.state.Count} </h1>
                <button onClick={this.handleAdd}>+1</button>
                <button onClick={this.handleMins}>-1</button>
                <button onClick={this.handleRest}>Reset</button>
            </div>
        )
    }
}

 ReactDOM.render(<Counter />, document.getElementById('app'))*/