import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import Footer from './components/Footer'
import NavBar from './components/NavBar'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<App />
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
