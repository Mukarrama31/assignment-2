import React from 'react';

const Dialog = ({ onClose }) => (
  <div className="dialog">
    <p>This is a dialog box. Click the button below to close it.</p>
    <button onClick={onClose}>Close Dialog</button>
  </div>
);

export default Dialog;
