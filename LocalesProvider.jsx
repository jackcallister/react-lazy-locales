import React, { Component, PropTypes, Children } from 'react'

export default class LocalesProvider extends Component {

  static childContextTypes = {
    locales: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      locales: this.props.locales
    }
  }

  render() {
    const { children } = this.props
    return Children.only(children)
  }
}
