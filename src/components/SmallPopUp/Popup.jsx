import React from 'react';
import EnhancedTable from './Table';
import IconLabelButtons from './SaveBtn';
import TextButtons from './SignoutBtn';
import ContainedButtons from './MainBtn';

function Popup() {
  return (
    <div style={styles.main}>
      <EnhancedTable />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconLabelButtons />
        <ContainedButtons label='Full Mode'/>
        <TextButtons />
      </div>
    </div>
  );
}

const styles = {
  main: {
    width: '400px',
    height: '500px',
  },
};
export default Popup;
