import style from '../styles/Header.module.css';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {ChangeEvent, FormEvent, useState} from 'react';

interface Props{
  whenAddNewTask: (taskContent: string) => void;
}

export function Header({whenAddNewTask}: Props){
  const [content, setContent] = useState("");

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    whenAddNewTask(content);
    setContent("");
  }

  function onChangeContent(envent: ChangeEvent<HTMLInputElement>){
    setContent(envent.target.value);
  }

  return(
    <header className={style.header}>
      <img src="" alt="" />
      <form className={style.newTaskForm} onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Add a new task'
          onChange={onChangeContent}
          value={content}
        />
        <button>
          Create
          <AiOutlinePlusCircle  size={20}/>
        </button>
      </form>
    </header>
  )
}