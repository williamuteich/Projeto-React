import React from 'react'
import './styles.css'; 

import { MdAutoDelete, MdDelete } from "react-icons/md";
import PropTypes from 'prop-types'

const Listagem = ({ buttonDelete, listCheck, listaTarefas}) => {


  Listagem.propTypes = {
    listaTarefas: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired
      })
    ).isRequired,
    buttonDelete: PropTypes.func.isRequired,
    listCheck: PropTypes.func.isRequired
  }

    return(
    <ul className='listaTarefas'>
        {listaTarefas.map((listaTarefa) => (
         <li key={listaTarefa.id.toString()} className={listaTarefa.checked ? "listaChecked" : ""}>
         <span onClick={() => listCheck && listCheck(listaTarefa)} role='button' tabIndex={0}>{listaTarefa.title}</span>
         <button type='button' className='buttonDelete' onClick={() => buttonDelete && buttonDelete(listaTarefa)}>
           <MdAutoDelete size={23} />
         </button>
       </li>
        ))}
    </ul>
)};

export default Listagem;
