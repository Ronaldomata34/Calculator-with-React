import React from 'react';
import Buttons from "../components/Buttons";
import Screen from "../components/Screen";
import {Label} from "semantic-ui-react";



export default class App extends React.Component {
  

  state = {
    screenValue: '',
    items: "",
    
  }

  handleOperationClick = (e, {content}) => {
    if(this.state.items == "deletescreen" || this.state.items == "") {
      this.setState({ screenValue: this.state.screenValue + content  })
      this.setState({items: ""})
      } else {

      }
     
  }

  handleCaculation = (e) => {
    const result = eval(this.state.screenValue)
    if(this.state.screenValue == '') {

    }else {
    this.setState({screenValue : result})
    this.setState({items : "deletescreen"})}
  
  }

  handleCleanScreen = (e, { }) => {
    this.setState({screenValue: ""})
    this.setState({items: ""})
  }

  handleNumberClick = (e, { content }) => {
    if(this.state.items == "deletescreen") {

    } else {
    this.setState({ screenValue: this.state.screenValue + content  })
    }
    
  }

  render() {

    const { screenValue } = this.state;

    return (
      <div className="App">
        <div className="App-calculator">
          <h1 className="App-header" >UrCalculator</h1>
          <Screen content={screenValue} ></Screen>
          <div className="App-buttons">
            <Buttons onNumberClick={this.handleNumberClick} onCleanScreen={this.handleCleanScreen} onResultClick={this.handleCaculation} onOperationClick={this.handleOperationClick}/>
            </div>
        </div>
      </div>
    );
  }
}