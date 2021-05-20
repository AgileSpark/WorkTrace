import React from 'react';
import BigTable from './BigTable';
import IconLabelButtons from '../SmallPopUp/SaveBtn';
import TextButtons from '../SmallPopUp/SignoutBtn';
import ContainedButtons from '../SmallPopUp/MainBtn';

function MainDashboard() {
  return (
    <div style={styles.main}>
      <BigTable />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '96%',
        }}
      >
        <IconLabelButtons />
        <ContainedButtons label="Mini Mode" />
        <TextButtons />
      </div>
    </div>
  );
}

const styles = {
  main: {
    width: '800px',
    height: '1400px',
  },
};
export default MainDashboard;
