import React, { useState, useEffect } from 'react';

function Expense() {
    const [expense, setExpense] = useState(JSON.parse(localStorage.getItem('expense')) || []);
    const [amountInput, setAmountInput] = useState('');
    const [noteInput, setNoteInput] = useState('');

    useEffect(() => {
        const savedExpense = JSON.parse(localStorage.getItem('expense'));
        if (savedExpense) {
            setExpense(savedExpense);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('expense', JSON.stringify(expense));
    }, [expense]);

    const addExpense = () => {
        const newExpense = { amount: amountInput, note: noteInput };
        setExpense([...expense, newExpense]);
        setAmountInput('');
        setNoteInput('');
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
            <h2 className="text-2xl p-3">Expense</h2>
            <div className="p-3">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mr-2"
                />
                <input
                    type="text"
                    placeholder="Note"
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mr-2"
                />
                <button
                    onClick={addExpense}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Expense
                </button>
            </div>

            <ul className="p-3">
                {expense.map((item, index) => (
                    <li key={index} className="border-gray-400 flex flex-row mb-2">
                        <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex-1 pl-1 mr-16">
                                <div className="font-medium">${item.amount}</div>
                                <div className="text-gray-600">{item.note}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Expense;
