import React, { useState } from 'react';
import './ToDoList.css';

let initialState = [
  {
    task: 'Wake up at 7am',
    isComplete: false,
  },
];

function Todolist() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState(initialState);
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');

  function addTask() {
    if (!text.trim()) return;
    setTasks([...tasks, { task: text.trim(), isComplete: false }]);
    setText('');
  }

  function markComplete(e, i) {
    let newTasks = [...tasks];
    newTasks[i].isComplete = e.target.checked;
    setTasks(newTasks);
  }

  function editTask(i) {
    setEdit(i);
    setEditText(tasks[i].task);
  }

  function saveTask(i) {
    let newTasks = [...tasks];
    newTasks[i].task = editText;
    setTasks(newTasks);
    setEdit(null);
  }

  function deleteTask(i) {
    let newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  }

  return (
    <div className='TodoWrapper'>
      <input
        onChange={(e) => setText(e.target.value)}
        type='text'
        value={text}
        placeholder='Enter a new task...'
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((v, i) => (
          <li key={i}>
            <input
              type='checkbox'
              onChange={(e) => markComplete(e, i)}
              checked={v.isComplete}
            />
            {edit === i ? (
              <>
                <input
                  type='text'
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                />
                <button onClick={() => saveTask(i)}>Save</button>
              </>
            ) : (
              <>
                <span>{v.task}</span>
                <button onClick={() => editTask(i)}>Edit</button>
              </>
            )}
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
