import {useState, useEffect, useMemo} from 'react'

function App() {

  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState('');

  // ngOnInit
  useEffect(() => {
    const storageTasks = localStorage.getItem('tasks');
    if(storageTasks) {
      setTasks(JSON.parse(storageTasks))
    }
  }, []) // <= [] ngOnInit

  // ngOnChange
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]) // ngOnChange tasks

  const totalTasks = useMemo(() => tasks.length, [tasks]);

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

      <br/>
      <strong>Você tem {totalTasks} tarefas!</strong>
      <br/>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add task</button>
    </div>
  );
}

export default App;
