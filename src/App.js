import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.goTop = this.goTop.bind(this);
    this.goBottom = this.goBottom.bind(this);
    this.goRight = this.goRight.bind(this);
    this.goLeft = this.goLeft.bind(this);
    this.state = {
      labyrinth: [
        ['500','002','500','500','500','500','500','500','500','500','500','022','500','500','500','500','500','500','500','500','500','500','500','500','500'],
        ['500','004','010','010','008','008','008','008','008','500','500','023','500','500','500','008','008','500','500','008','008','008','008','008','500'],
        ['500','003','500','500','010','500','500','500','008','008','008','024','500','500','008','500','008','500','008','008','500','500','500','008','500'],
        ['500','000','500','501','008','000','000','500','008','500','500','024','008','008','008','500','008','500','008','500','500','008','500','008','500'],
        ['500','002','500','008','502','503','000','500','008','500','008','024','500','500','008','500','008','008','008','500','500','008','500','008','500'],
        ['500','003','500','016','505','504','500','500','008','500','008','008','500','500','008','500','500','500','008','500','008','008','500','008','500'],
        ['500','002','500','015','008','008','008','008','008','500','008','008','008','008','008','500','008','008','008','008','008','500','500','500','500'],
        ['500','004','500','500','008','500','500','000','500','500','008','500','500','008','500','500','008','500','500','500','500','500','500','008','500'],
        ['500','003','010','010','008','500','000','008','008','008','008','008','008','008','008','008','008','008','008','008','008','008','008','008','500'],
        ['500','000','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500','500']
      ],

      posX: 1,
      posY: 0,
      img: 'charBottom'
    }
  }
  checkTile(x, y){
    if (parseInt(this.state.labyrinth[this.state.posY + y][this.state.posX + x]) >= 500)
      return false
    return true
  }
  goRight(event) {
    if(event.keyCode === 39) {
      this.setState({img: "charRight"})
      if(this.state.posX + 1 < this.state.labyrinth[this.state.posY].length && this.checkTile(1,0)){
        const posX = this.state.posX + 1
        this.setState({posX})
      }
    }
  }
  goLeft(event) {
    if(event.keyCode === 37) {
      this.setState({img: "charLeft"})
      if(this.state.posX > 0 && this.checkTile(-1,0)){
        const posX = this.state.posX -1
        this.setState({posX})
      }
    }
  }
  goTop(event) {
    if(event.keyCode === 40) {
      this.setState({img: "charBottom"})
      if(this.state.posY + 1 < this.state.labyrinth.length && this.checkTile(0,1)){
        const posY = this.state.posY + 1
        this.setState({posY})
      }
    }
  }
  goBottom(event) {
    if(event.keyCode === 38) {
      this.setState({img: "charTop"})
      if(this.state.posY > 0 && this.checkTile(0,-1)){
        const posY = this.state.posY - 1
        this.setState({posY})
      }
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.goTop, false);
    document.addEventListener("keydown", this.goBottom, false);
    document.addEventListener("keydown", this.goRight, false);
    document.addEventListener("keydown", this.goLeft, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.goTop, false);
    document.removeEventListener("keydown", this.goBottom, false);
    document.removeEventListener("keydown", this.goRight, false);
    document.removeEventListener("keydown", this.goLeft, false);
  }
  render() {
    return (
      <div className="App">
        <table>
          {
            this.state.labyrinth.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((tileId, colIndex) => 
                <th key={colIndex}>
                  <div className="tile" style={{ backgroundImage: `url(${"./assets/tiles/" + tileId +".png"})` }}>
            
                      {
                        (rowIndex === this.state.posY && colIndex === this.state.posX)?
                        <img className="character" src={"./assets/characters/"+ this.state.img +".png"} alt="character"/>
                        : null
                      }
                      {console.log(rowIndex, colIndex, this.state.posX, this.state.posY)}
                  </div>
                </th>
              )}
            </tr>
          ))
          }
        </table>
      </div>
    );
  }
}

export default App;