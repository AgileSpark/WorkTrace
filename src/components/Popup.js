import React from 'react';
import BasicTable from './Table';

function Popup() {
  return (
    <div style={styles.main}>
      <h1>WorkTrace</h1>
      <BasicTable />
    </div>
  );
}

const styles = {
  main: {
    width: '400px',
    height: '600px',
  },
};
export default Popup;
