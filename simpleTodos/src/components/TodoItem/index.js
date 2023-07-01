import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props

  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-items">
      <p className="title">{title}</p>

      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
