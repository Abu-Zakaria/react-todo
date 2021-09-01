function Task(props)
{
	let name = props.name;

	function onDelete()
	{
		props.onDeleteHandler(props.task_id)
	}

	return (
			<div>
				<p>{name}</p>
				<button onClick={ onDelete }>Delete</button>
			</div>
		)
}

export default Task;