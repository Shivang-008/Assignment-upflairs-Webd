import task from './task'; // adjust if your path is different
import './App.css';

function App() {
  const categories = [...new Set(task.map((task) => task.category))];

  return (
    <div className='Wrapper'>
      <h1>🗂️ To-Do List (Without State)</h1>
      {categories.map((category) => (
        <div key={category} className="list-section">
          <h2>{category}</h2>
          {task
            .filter((task) => task.category === category)
            .map((task) => (
              <div key={task.id} className="todo-item">
                <p>{task.completed ? '✅' : '❌'} {task.title}</p>
                <p className="todo-description">{task.description}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;