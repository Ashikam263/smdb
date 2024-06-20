// import React from 'react'
import './styles/global.css';
import Header from './components/Header.jsx'
import TopCardList from './components/top-card-list.jsx'
import Overview from './components/Overview.jsx'
import Switch from './components/Switch.jsx'

function App() {
  return (
    <>
    <Header>
      <Switch/>
    </Header>
    <TopCardList/>
    <Overview/>
    </>
  );
}

export default App;
