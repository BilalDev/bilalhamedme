import React, { Component } from 'react';

class SvgCircle extends Component {

    constructor (props) {
        super(props);

        this.state = {
            radius: props.radius,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(prevState => {
                const min = 7;
                const max = 25;
                const rand = min + Math.random() * (max - min);

                return {
                    radius: rand
                };
            });
        }, 220);
    }

    render () {
        return (
            <circle cx={this.props.cx} cy={this.props.cy} fill={this.props.fill} r={this.state.radius}></circle>
        );
    }
}

export default SvgCircle;