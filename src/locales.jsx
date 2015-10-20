import React, { PropTypes, Component } from 'react'

export default function locales(mapLocalesToProps) {
  return function wrapWithLocale(WrappedComponent) {
    return class Locale extends Component {

      static contextTypes = {
        locales: PropTypes.object.isRequired
      }

      render() {
        return <WrappedComponent {...this.props} {...mapLocalesToProps(this.context.locales)} />
      }
    }
  }
}
