import React, { Component } from 'react';
import Score from './components/Score'

//CSS
import './App.css'

class App extends Component {
  state={
    baseURL: 'http://jservice.io/api/',
    generator: 'random',
    questionURL: '',
    questionArray: [{}],
    score: 0,
    answerVisible: false, 
  }
  
  handleQuestion=()=>{
    console.log(this.state.questionArray[0].answer);
    this.setState({
      answerVisible: false,
      questionURL: this.state.baseURL + this.state.generator
    }, ()=>{
      fetch(this.state.questionURL)
      .then(response=>response.json()          
      )
      .then(data=>           
         this.setState({
          questionArray: data
         })
       )
      .catch(error=>console.error(error))
      }
    )
    
  }
  
  handleToggleAnswer=()=>{
    this.setState((prevState)=>{
      //can I do it without using return??
      return {
      answerVisible: !prevState.answerVisible,
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Welcome to Jeopardiy!</h1>
        <Score />
        <h2>Let's play!</h2>
        <button className="get-question" onClick={this.handleQuestion}>Get Question</button><br />
  
        {
          console.log('questionArray: ', this.state.questionArray[0])
        
        }

        <h2>Category: <span>{this.state.questionArray[0].category?.title}</span></h2>
        <h2>Points: <span>{this.state.questionArray[0].value}</span></h2>
        <h2>Question: <span>{this.state.questionArray[0].question}</span></h2>
        <button className="reveal-answer" onClick={this.handleToggleAnswer}>Click to Reveal Answer</button>
        {this.state.answerVisible&&<h2>Answer: <span>{this.state.questionArray[0].answer}</span></h2>}
      </div>
    );
  }
}

export default App;
