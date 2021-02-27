import React, { render, Component } from './react'

const root = document.getElementById('root');

const jsx = (
  <div>
    {/* <p>Hello React Fiber</p>
    <p>Hello React Fiber2</p> */}
  </div>
)

class Greating extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        React Class Component
      </div>
    )
  }
}

render(<Greating />, root)