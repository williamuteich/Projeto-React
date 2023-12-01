import React, { useState } from 'react';

import NewList from './components/newList'; 
import Listagem from './components/Novalistagem'; 


const App = () => {
  
  const [listaTarefas, setListaTarefas] = useState([]);
  
  const onNewList = (value) => {

    setListaTarefas((prevLista) => [
      ...prevLista,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  }

  const listCheck = (listaTarefa) => {
    setListaTarefas(listaTarefas.map((objeto) => (
      objeto.id === listaTarefa.id ? { ...objeto, checked: !listaTarefa.checked } : objeto
    )));
  };
  
  const buttonDelete = (listaTarefa) => {
    setListaTarefas((prevLista) => prevLista.filter((objeto) => objeto.id !== listaTarefa.id));
  };
  
    return(
    <section id='app' className='container'>
      <header>
        <h1 className='title'>Lista De tarefas</h1>
      </header>
      <section className='main'>
      <NewList onNewList={onNewList} />
      <Listagem listaTarefas={listaTarefas} listCheck={listCheck} buttonDelete={buttonDelete}/>
      </section>
    </section>
  );
}

export default App;
