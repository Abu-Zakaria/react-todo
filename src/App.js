import './App.css';
import { useState } from 'react';
import Header from './component/Header.js';
import PostBox from './component/PostBox.js';
import Task from './component/Task.js';

function App() {
  let [tasks, setTasks] = useState([]);

  let addTaskHandler = function(text)
  {
    setTasks(prev => ([...prev, text]));
    console.log(tasks);
  }

  let deleteTaskHandler = function(id)
  {
    console.log("DELETEING ", id)
    tasks.splice(id, 1)
    setTasks(() => ([...tasks]))
    console.log(tasks)
  }

  return (
    <div className="App">
      <Header />
      <PostBox addHandler={addTaskHandler}/>
      {
        tasks.map((task, index) => {
          return (
            <div className="task" key={ index }>
              <Task onDeleteHandler={ deleteTaskHandler } name={ task } task_id={ index }  />
            </div>
            )
        })
      }

    </div>
  );
}

export default App;
