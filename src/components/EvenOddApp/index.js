// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onincrease = () => {
    const randomnum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomnum}))
  }

  render() {
    const {count} = this.state

    const displaytext = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main">
        <div className="sec-Con">
          <h1 className="hh">Count {count}</h1>
          <p className="pp">Count is {displaytext}</p>
          <button type="button" className="bb" onClick={this.onincrease}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
