import React, { Component } from 'react'
import classnames from 'classnames'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
    this._onClicked = this._onClicked.bind(this)
  }

  _onClicked(e) {
    e.preventDefault()
    let { checked } = this.state
    this.setState({
      checked: !checked
    })
  }

  render() {
    let { title } = this.props,
        { checked } = this.state,
        checkboxClasses = classnames({
          checkbox: true,
          checked: checked
        })

    return (
      <div>
        <a className={checkboxClasses} onClick={this._onClicked}></a>
        <span className="label">{title}</span>
      </div>
    )
  }
}

Checkbox.defaultProps = {
  title: 'Checkbox'
}

Checkbox.propTypes = {
  title: React.PropTypes.string
}

export default Checkbox
