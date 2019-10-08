//import
import React, { Component } from 'react';
import './App.css';


//Appクラス
class App extends Component {
  //変数定義：data
  data = [
    "This is a list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];

  //msgスタイル
  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0",
    padding: "5px",
  }

  //コンストラクタ
  constructor(props) {
    super(props);
    this.state = {
      list: this.data
    }
  }

  //render
  render(){
    return (
      <div>
        <h1>React</h1>
        <h2 style={this.msgStyle}>show list.</h2>
        <List title="サンプルリスト" data={this.data} />
      </div>
    );
  }

}

//Listクラス
class List extends Component {
  //変数定義：number
  number = 1;

  //titleスタイル
  title = {
    fontSize: "20pt",
    fontWeight: "bold",
    color: "blue",
  }

  //render
  render(){
    let data = this.props.data;
    return(
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) => 
            <Item number={this.number++} value={item} key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}

//Itemクラス
class Item extends Component {
  //liスタイル
  li = {
    listStyleType: "square",
    fontSize: "16pt",
    color: "#06",
    margin: "0",
    padding: "0",
  }

  //numスタイル
  num = {
    fontWeight: "bold",
    color: "red"
  }

  //render
  render(){
    return(
      <div>
        <li style={this.li}>
          <span style={this.num}>[{this.props.number}]</span>
          {this.props.value}
        </li>
      </div>
    );
  }

}

//export
export default App;