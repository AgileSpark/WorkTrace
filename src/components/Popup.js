import React from 'react';
import EnhancedTable from './Table';
import IconLabelButtons from './SaveIcon';
import TextButtons from './LogoutBtn';

function Popup() {
  return (
    <div style={styles.main}>
      <EnhancedTable />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconLabelButtons class="flex-child save" />
        <TextButtons class="flex-child logout" />
      </div>
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
