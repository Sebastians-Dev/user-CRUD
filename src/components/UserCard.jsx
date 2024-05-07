import './styles/UserCard.css'
const UserCard = ({user, deleteUser, setUserEdit, handleOpenForm}) => {

    const  handleDelete = () => {
        deleteUser('/users/', user.id)
    }

    const  handleEdit = () => {
        setUserEdit(user)
        handleOpenForm()
    }

  return (
    <div  className="div__container">
      <div className='article__container'>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
          <li><span className='article__indice'>Email: </span><span className='article__indice1'>{user.email}</span></li>
          <li><span className='article__indice'>Birthday: </span><span className='article__indice1'>{user.birthday}</span></li>
        </ul>
        <button className='article__btn' onClick={handleEdit}>Edit</button>
        <button className='article__btn' onClick={handleDelete}>Delete</button>
      </div>
    </div>
   
  )
}

export default UserCard