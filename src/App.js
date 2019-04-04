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
        [1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,4,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1],
        [1,3,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1],
        [1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1],
        [1,2,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1],
        [1,3,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1],
        [1,2,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1],
        [1,4,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1],
        [1,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1]
      ],

      posX: 1,
      posY: 0,
      img: 'charBottom'
    }
  }
  goRight(event) {
    if(event.keyCode === 39) {
      const posX = this.state.posX + 1
      this.setState({posX})
      this.setState({img: "charRight"})
    }
  }
  goLeft(event) {
    if(event.keyCode === 37) {
      const posX = this.state.posX -1
      this.setState({posX})
      this.setState({img: "charLeft"})
    }
  }
  goTop(event) {
    if(event.keyCode === 40) {
      const posY = this.state.posY + 1
      this.setState({posY})
      this.setState({img: "charBottom"})
    }
  }
  goBottom(event) {
    if(event.keyCode === 38) {
      const posY = this.state.posY - 1
      this.setState({posY})
      this.setState({img: "charTop"})
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