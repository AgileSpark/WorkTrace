import React from 'react';
import App from './App.js';

function Popup() {
    return (
        <div style={styles.main}>
            <h1>Chrome Ext - Popup</h1>
            <App />
        </div>
    )
}
const styles = {
    main: {
        width: '600px',
        height: '600px'
    }
}
export default Popup;