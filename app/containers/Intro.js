import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import classnames from 'classnames'

class Intro extends Component {
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
      <div className="intro">
        <Helmet
          title="Checkbox Demo"
        />
        <h1>Checkbox Demo</h1>
        <div>
          <a className={checkboxClasses} onClick={this._onClicked}></a>
          <span className="label">{title}</span>
        </div>
      </div>
    )
  }
}

Intro.defaultProps = {
  title: 'Checkbox'
}

Intro.propTypes = {
  title: React.PropTypes.string
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Intro)
