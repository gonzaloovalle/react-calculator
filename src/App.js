import React, {Component} from 'react';
import './App.css';
import ResultComponent from "./components/ResultComponent";
import KeypadComponent from "./components/KeypadComponent";

class App extends Component {
    constructor() {
        super();
        this.state = {
            result: ""
        }
    }

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeypadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;