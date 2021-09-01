import './App.css';
import { useState } from 'react';
import Header from './component/Header.js';
import PostBox from './component/PostBox.js';

function App() {
  let [tasks, setTasks] = useState(
      ['asdas', 'asda']
    );

  let addTaskHandler = function(text)
  {
    let temp = tasks;
    temp.push(text);
    setTasks(tasks);
    console.log(tasks);
  }

  return (
    <div className="App">
      <Header />
      <PostBox addHandler={addTaskHandler}/>
      {
        tasks.map((task, index) => {
          return (
            <div className="task" key={ index }>
              <p>{ task }</p>
            </div>
            )
        })
      }

    </div>
  );
}

export default App;
