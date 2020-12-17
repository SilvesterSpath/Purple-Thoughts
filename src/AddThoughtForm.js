import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
	const [text, setText] = useState('');
	
	console.log(props.addThought);
	
	const handleTextChange = (event) => {
		setText(event.target.value);
	}
	
	const handleSubmit = (event) =>{
		event.preventDefault(); //this prevent the page from refresh wich is the default behavior of a form submission
		const thought = {
			id: generateId(),
			text: text,
			expiresAt: getNewExpirationTime()
		}
		props.addThought(thought);
		setText('');		
	}
	
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input 
        type="text"
        aria-label="What's on your mind?"
        placeholder="My tought will dissapear in 15 seconds..."
				value={text}
				onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
