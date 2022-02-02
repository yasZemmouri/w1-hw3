class DivOne extends React.Component{
    state = this.props.passedState;
    render(){
        console.log('DivOne', this.state);
        return (
            <div>
                <DivTwo passedState={this.state}/>
            </div>
        )
    }
}
class DivTwo extends React.Component{
    state = this.props.passedState;
    render(){
        console.log('DivTwo', this.state);
        return (
            <div>
                <DivThree passedState={this.state}/>
                <DivThree passedState={this.state}/>
            </div>
        )
    }
}

class DivThree extends React.Component{
    state = this.props.passedState;
    //arrow function with event handlers
    changeIt = () => {
        //arrow function with prevState        
          this.setState((prevState)=>{
            return {
                tardis: {
                    name: (this.state.tardis.caps? 
                        prevState.tardis.name.toLowerCase(): 
                        prevState.tardis.name.toUpperCase()),
                    caps: !prevState.tardis.caps
                }
            }
          })
        } 
    render(){
        console.log('DivThree', this.state);
        return (
            <div>
                <h3 onClick={this.changeIt}>{this.state.tardis.name}</h3>
            </div>
        )
    }
}


class App extends React.Component{
    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false,
        }
    }
    
         
    render(){
        console.log('App state', this.state);
        return (
            <div>
                <DivOne passedState={this.state}/>
            </div>
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById('container'))