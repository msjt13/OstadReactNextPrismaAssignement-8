import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Income from './components/Income';
import Expense from './components/Expense';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <nav>
                    <ul className="flex flex-col sm:flex-row sm:justify-around">
                        <li className="mb-2 sm:mb-0">
                            <Link to="/income" className="text-2xl text-blue-500">
                                Income
                            </Link>
                        </li>
                        <li>
                            <Link to="/expense" className="text-2xl text-blue-500">
                                Expense
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/income" element={<Income />} />
                    <Route path="/expense" element={<Expense />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
