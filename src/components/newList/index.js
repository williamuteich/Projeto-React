import React, { useState } from 'react';
import './styles.css'; 

import PropTypes from 'prop-types';

const NewList = ({ onNewList }) => {

    const [value, setValue] = useState("");

    const erase = () => {
        setValue("");
      };  
      
      const submit = () => {
        if(value !== '' && onNewList){
        onNewList(value);
        erase();
        }
      };

      const tecla = (e) => {
        if (e.key === 'Enter') {
          submit();
        } else if (e.key === 'Escape') {
          erase();
        }
      };

      const valorInput = (event) => {
        setValue(event.target.value);
      };

    return(
    <input className='new-list' 
        placeholder='Lista de Tarefas' 
        value={value} 
        onChange={valorInput} 
        onKeyDown={tecla}
    />
);
}

NewList.propTypes = {
    onNewList: PropTypes.func.isRequired,
}

export default NewList;