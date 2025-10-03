import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name.trim() === '') {
    setError('Ошибка! Введите имя!')
  } else {
    addUserCallback(name)
    setName('')
    setError('')
  }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
  // если имя пустое - показать ошибку
  if (name.trim() === '') {
    setError('Error: Name cannot be empty')
  }
}

export const pureOnEnter = (
  event: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => {
  if (event.key === 'Enter') {
    addUser()
  }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string>('') // need to fix any

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value) // need to fix
    error && setError('')
  }

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(event, addUser)
  }

  const totalUsers = users.length
  const lastUserName = users.length ? users[users.length - 1].name : ''

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
