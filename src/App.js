import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    'Pay bills',
    'Study react hooks'
  ]);

  const [input, setInput] = useState('')

  function handleAdd() {
    setTasks([...tasks, input]);
    setInput('');
  }

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add task</button>
    </div>
  );
}

export default App;
