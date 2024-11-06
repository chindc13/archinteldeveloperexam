import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AccountSettings from './Pages/AccountSettings';
import AllMedia from './Pages/AllMedia';

import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { backendURL } from './Shared';

function App() {

	
	
	return (
		<div className="App">
			<div className="wrapper">
				<Router>
					<Routes>
						<Route path="/" element={<><Login /></>} />
						<Route path="/dashboard" element={<><Header /><Sidenav /><Dashboard /><Footer /></>} />
						<Route path="/all/media" element={<><Header /><Sidenav /><AllMedia /><Footer /></>} />
						<Route path="/account/settings" element={<><Header /><Sidenav /><AccountSettings /><Footer /></>} />
					</Routes>

				</Router>
			</div>
		</div>


	);
}

export default App;
