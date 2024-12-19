import React, { Component } from 'react'
import loading from './Spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center spinner'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinner
