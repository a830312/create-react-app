import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Checkbox from 'components/Checkbox'

class CheckboxDemo extends Component {
  

  render() {

    return (
      <div className="checkbox-demo">
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

CheckboxDemo.defaultProps = {
  title: 'Checkbox'
}

CheckboxDemo.propTypes = {
  title: React.PropTypes.string
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(CheckboxDemo)
