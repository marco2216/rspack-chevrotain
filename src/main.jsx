import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import * as x from 'chevrotain'

x.EMPTY_ALT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
