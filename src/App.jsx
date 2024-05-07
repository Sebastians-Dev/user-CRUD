import { useEffect, useState } from 'react'
import './App.css'
import userCrud from './hooks/userCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [userEdit, setUserEdit] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

  const BASEURL = 'https://users-crud-szn9.onrender.com'
  const [ users, getUsers, createUsers, deleteUser, updateUsers]=userCrud(BASEURL)
 
  useEffect(() => {
    getUsers('/users/')
  }, [])

const handleOpenForm = () => {
  setFormIsClose(false)
}
  return (
  <div  className="App">
    <header className='app__header'>
    <h1 className='app__title'> Usuarios</h1>
    <button onClick={handleOpenForm} className='form__btn1'>+ Create nuevo usuario</button>
    </header>

    <FormUser
      createUsers={createUsers}
      userEdit={userEdit}
      updateUsers={updateUsers}
      setUserEdit={setUserEdit}
      formIsClose={formIsClose}
      setFormIsClose={setFormIsClose}
    />
    <div className='user-container'>
      {
        users?.map(user => (
          <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setUserEdit= {setUserEdit}
          handleOpenForm = {handleOpenForm}
          />
        ))
      }
    </div>
  </div>
   
  )
}

export default App
