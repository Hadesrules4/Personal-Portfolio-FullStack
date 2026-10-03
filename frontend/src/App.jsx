import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import './styles.css';

function Public(){const [dark,setDark]=useState(true);return <div className={dark?'app dark':'app'}><Navbar dark={dark} setDark={setDark}/><main><Home/></main><footer>© {new Date().getFullYear()} Pranjal Kaushik. Built with React + Node.js + MongoDB.</footer></div>}
export default function App(){return <BrowserRouter><Routes><Route path="/admin" element={<Admin/>}/><Route path="*" element={<Public/>}/></Routes></BrowserRouter>}
