import React from "react";
import "./index.css";

const numbers = [...Array(10).keys()];

class RandomNum extends React.Component{
    state = { number: [0, 0, 0, 0, 0, 0, 0, 0] };
    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((x) => x);
            const arr = [];
            for (let i = 0; i <= 7; i++) {
                const random = Math.floor(
                    Math.random() * (numberCopy.length - 1)
                );
                arr.push(numberCopy[random] + 1);
                numberCopy.splice(random, 1);
            }
            this.setState({ number: arr, effect: true });
            setTimeout(() => {
                this.setState({ effect: false });
            }, 800);
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1 id="title"></h1>
                <div id="numbers" className="numbers">
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="blue"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="blue"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="red"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="4"
                        color="red"
                        number={this.state.number[4]}
                        decrypting={this.state.effect}
                    />
                   <LotteryItem
                        index="5"
                        color="grey"
                        number={this.state.number[5]}
                        decrypting={this.state.effect}
                    />
                
                  
                </div>
                <div>
                    <LotteryButton
                        decrypting={this.state.effect}
                        run={this.randomize}
                    />
                </div>
            </React.Fragment>
        );
    }
}

class LotteryButton extends React.Component {
    render() {
        return (
            <button
                id="btn"
                className={this.props.decrypting && "hide"}
                className="generate"
                onClick={this.props.run}
            >
                ??????
            </button>
        );
    }
}

class LotteryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: <div className="RandomBox"></div>,
            decryptingDone: "",
        };
    }

    decryptEffect() {
        this.setState({ decryptingDone: "" });
        this.timer = setInterval(() => {
            this.randomNumber();
        }, 1);
        setTimeout(() => {
            this.setState({
                decryptingDone: "done",
                number: this.props.number,
            });
            clearTimeout(this.timer);
        }, 50 * +this.props.index + 50);
    }

    randomNumber() {
        this.setState({ number: Math.round(Math.random() * 10) });
    }

    componentDidUpdate(nextProps) {
        const { decrypting } = this.props;
        if (nextProps.decrypting !== decrypting) {
            if (decrypting) {
                this.decryptEffect();
            }
        }
    }

    render() {
        return (
            <div
                className={`ball ${this.props.color} ${this.state.decryptingDone}`}
            >
              <div className="RandomBox"> {this.state.number}</div> 
            </div>
        );
    }
}

export default RandomNum;