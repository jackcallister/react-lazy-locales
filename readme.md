# React Lazy Locales

Lazy internationalisation for your React applications. What do I mean by lazy? None of the fully fledged features of React-Intl. Only loading a json file and having it available as props in your components.

# Usage

Load up a locale file at the root of your view:

```
import { LocalesProvider } from 'react-lazy-locales'
import en from 'my/locale.json'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <LocalesProvider locales={en}>
      <App />
    </LocalesProvider>,
    document.getElementById('app')
  )
})
```

Now use a higher order component to wrap your components which need locale data:

```
import React, { Component, PropTypes } from 'react'
import { locales } from 'react-lazy-locales'

function mapLocalesToProps(locales) {
  return {
    title: locales.app.title
  }
}

class App extends Component {

  render() {
    return (
      <section>
        <h1>{this.props.title}</h1>
      </section>
    )
  }
}

export default locales(mapLocalesToProps)(App)
```

Easy peasy bro.

```
npm install react-lazy-locales
```

