import React, { Component } from 'react';

class Score extends Component {
    state={
        score: 0,
    }
      scoreUp=()=>{
        this.setState((prevState)=>{
          return {
          score: ++prevState.score,
          }
        }
        )
      }
      scoreDown=()=>{
        this.setState((prevState)=>{
          return {
          score: prevState.score && --prevState.score
          }
        }
        )
      }
      scoreReset=()=>{
        this.setState({
     
          score: 0
       }
        );
      }
    render() {
        return (
            <div>
                <h2>Score: <span>{this.state.score}</span></h2>
                <button className="decrease" onClick={this.scoreDown}>Decrease</button>
                <button className="increase" onClick={this.scoreUp}>Increase</button>
                 <button className="reset" onClick={this.scoreReset}>Reset</button>
            </div>
        );
    }
}

export default Score;
