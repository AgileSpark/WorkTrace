import React from 'react';
// import CompanyList from './CompanyListItem.jsx'
import ProgressBar from './MainDashboard/ProgressBar/ProgressBar.js'
import MainDashboard from './MainDashboard/MainDashboard.js'

function App() {
  const MockDataArray = [
    {
    progress : {
      step: 2,
    }, 
    company_name: 'Google (Dieu\'s Mock data)'
    },
    {
      progress : {
        step: 1,
      }, 
      company_name: 'LinkedIn'
    },
    {
      progress : {
        step: 4,
      }, 
      company_name: 'Dieu Mock data Facebook'
    }
  ] 

  const jobsProgress = [];
  
  for (let i = 0; i < MockDataArray.length; i += 1){
    jobsProgress.push(<ProgressBar props = {MockDataArray[i]}/>);
  }


  return (
    <div className="App">
      <button>HIIIIII2</button>
      <div>
        <MainDashboard/>
      </div>
      {jobsProgress}
    </div>
  );
}

export default App;