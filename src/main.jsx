import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvuider } from './context/index.jsx'
import { reducer, initialState } from './context/reducer.jsx'

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <StateProvuider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvuider>
  </BrowserRouter>
  // </React.StrictMode>,
)
