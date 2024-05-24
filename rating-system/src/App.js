import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './styles/StarRating.css';
import './styles/Dialog.css';
import './App.css';

const App = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div className="App">
            <StarRating />
            <button className="dialog-button" onClick={() => setDialogOpen(true)}>Open Dialog</button>
            {isDialogOpen && <Dialog onClose={handleCloseDialog} />}
        </div>
    );
};

export default App;

