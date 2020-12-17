import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    }
  ]);

	const addThought = (thought)=>{
		if (thought.text.length !== 0){
			setThoughts((thoughts)=>[thought, ...thoughts]);			
		}
	}
	
	const removeThought = (thoughtIdToRemove) =>{
		setThoughts((prev)=>prev.filter(i => i.id !== thoughtIdToRemove));
	}

  return (
    <div className="App">
      <header>
        <h1>My Thoughts Fly By</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((i) => (
            <Thought key={i.id} thought={i} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
