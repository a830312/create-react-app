import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Checkbox from 'components/Checkbox'

class Intro extends Component {
  

  render() {

    return (
      <div className="intro">
        <Helmet
          title="Checkbox Demo"
        />
        <h1>Checkbox Demo</h1>
        <Checkbox title="checkbox1" />
        <Checkbox title="checkbox2" />
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
