import React, {Component} from 'react';
import './Counter.css';

import Display from './Display';

import ButtonsPanel from './ButtonsPanel';

import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        };

        this.state = {counterStep: 1};

    }

    changeValue = (action) => {

        let currentCounterValue = this.state.counterValue;

        if (action === 'add') {
            currentCounterValue += 1;

        } else if (action === 'reinit') {
            currentCounterValue = this.props.initValue;

        } else {
            currentCounterValue = 0;
        }

        this.setState((prevState) => {
            return ({
                counterValue: currentCounterValue
            });
        });

        this.setState((prevState) => {
            return ({
                counterStep: prevState.counterStep + 5
            })
        })
    }

    render() {
        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />

                <ButtonsPanel buttonMethod={this.changeValue} />

                {/* <span className="step">{this.props.initValueStep}</span> */}
                <Step  />
                
            </div>
        )
    }
}

export default Counter;