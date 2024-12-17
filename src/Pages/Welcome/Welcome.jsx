import React, { useState } from 'react';
import './Main.css';

function Welcome() {
    const [name, setName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            setError('Name cannot be empty');
        } else {
            setName(inputValue.trim());
            setShowModal(true);
            setInputValue('');
        }
    };

    // Закриття модального вікна
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="Main">
            <h2>Welcome on REACT documentation page</h2>
            <p>
                React has a community of millions of developers. On this page we’ve listed some React-related communities 
                that you can be a part of; see the other pages in this section for additional online and in-person learning materials.
            </p>

            <form onSubmit={handleSubmit} className="registration-form">
                <label>
                    Enter your name:
                    <input 
                        type="text" 
                        value={inputValue} 
                        onChange={handleInputChange} 
                        placeholder="Your name" 
                    />
                </label>
                <button type="submit">Register</button>
                {error && <p className="error">{error}</p>}
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Welcome, {name}!</h3>
                        <p>Thank you for registering!</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

            {name && (
                <div className="greeting">
                    <h3>Hello, {name}! 👋</h3>
                </div>
            )}
        </div>
    );
}

export default Welcome;
