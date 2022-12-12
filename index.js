import React from 'react'
import reactDom from 'react-dom'
import App from './src/client/App'

import { Provider } from 'react-redux'
import { store } from './src/client/redux/store'

reactDom.render(
<Provider store={ store }>
  <App />
</Provider>, 
document.getElementById('root'))
