import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <hr />
        <div>
          <Input property="氏名入力" updateAction={this.updateState} />
          <Output property="氏名出力" name={this.state.name} />
        </div>
      </div>
    );
  }

}

class Input extends Component {

  render() {
    return (
      <div>
        <span>{this.props.property}：</span>
        <input type="text" onChange={this.props.updateAction} />
      </div>
    )
  }
  
}

class Output extends Component {

  render() {
    return (
      <div>
        <p>{this.props.property}：{this.props.name}</p>
      </div>
    )
  }
  
}

export default App;