import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from 'components/Checkbox'

describe('Component::Checkbox', function(){
  let props

  it('should render', function() {
    let checkbox = shallow(<Checkbox />)
    expect(checkbox.find('.checkbox').exists()).to.be(true)
  })

  it('should have default title name', function() {
    let checkbox = shallow(<Checkbox />),
        title = checkbox.props(title)

    expect(title).to.equal('Checkbox')
  })

  it('should not be checked by default', function() {
    let checkbox = shallow(<Checkbox />)
    expect(checkbox.find('.checked').exists()).to.be(false)
  })

  it('should be added with an additional class after checked', function() {
    let checkbox = shallow(<Checkbox />)
    checkbox.setState({ checked: true })
    expect(checkbox.find('.checked').exists()).to.be(true)
  })
})
