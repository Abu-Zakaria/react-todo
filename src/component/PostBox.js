import { useState } from 'react';

function PostBox(props)
{
	let addTaskHandler = props.addHandler;
	let [taskText, setTaskText] = useState("");

	function updateText(e)
	{
		setTaskText(e.target.value)
	}

	function onAdd()
	{
		addTaskHandler(taskText)
		setTaskText("")
	}

	return (
			<div>
				<textarea onChange={ updateText } value={ taskText }></textarea>
				<button onClick={ onAdd }>Add</button>
			</div>
		);
}

export default PostBox;