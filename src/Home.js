import logo from './logo.svg';
import './App.css';
import {useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const history = useHistory()
  const response = useSelector((reducer)=> reducer)
  return (
    <>
      <header>Proof of concept - 2</header>
      <main>
        <section>
          <div id={'section_container'}>
            <h6>{`Hi ${response.username} user,`}</h6>
            <h6>{`Your available balance : ${response.balance}`}</h6>
            <h6>Do you want to deposit or deposit or withdraw ?</h6>
          </div>
        </section>
        <section className={'section_buttons_container'}>
          <button onClick={() => history.push('/deposit')} className={'button1'}>Deposit</button>
          <button onClick={() => history.push("/withdraw")} className={'button2'}>Withdraw</button>
        </section>
      </main>
    </>
  );
}

export default App;
