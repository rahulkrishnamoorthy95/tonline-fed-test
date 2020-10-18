import React from 'react';
import Header from './client/components/Header';
import Dashboard from './client/components/Dashboard';
import Footer from './client/components/Footer';
import './App.scss';

export default function App() {
	return (
		<>
			<Header />
			<Dashboard />
			<Footer />
		</>
	);
}
