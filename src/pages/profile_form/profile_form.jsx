import React from "react"
import { useState, useRef } from "react"
import { ReactDOM } from "react"
import { Input } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './profile_form.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch } from "react-redux"
import { changeUser } from "../../services/userDataSlice"

export default function ProfileForm() {

  const dispatch = useDispatch()

  const [name, setName] = useState({active: true, value: ''})
  const [login, setLogin] = useState({active: true, value:''})
  const [password, setPassword] = useState({active: true, value:''})

  const nameRef = useRef(null)
  const loginRef = useRef(null)
  const passwordRef = useRef(null)

  function handleNameIconClick() {
    setName({...name, active: !name.active})
    if (nameRef.current !== document.activeElement) {
      setTimeout(() => nameRef.current.focus(), 100)
    } 
  }

  function handleLoginIconClick() {
    setLogin({...login, active: !login.active})
    if (loginRef.current !== document.activeElement) {
      setTimeout(() => loginRef.current.focus(), 100)
    } 
  }

  function handlePasswordIconClick() {
    setPassword({...password, active: !password.active})
    if (passwordRef.current !== document.activeElement) {
      setTimeout(() => passwordRef.current.focus(), 100)
    } 
  }

  function handleCancelClick() {
    setName({...name, value: ''})
    setLogin({...login, value: ''})
    setPassword({...password, value: ''})
  }

  function handleSaveClick() {
    dispatch(changeUser({name: name.value, login: login.value, password: password.value }))
  }


  return (
    <form className={styles.form}>
          <Input
            ref={nameRef} 
            type={'text'} 
            placeholder={'Имя'}  
            value={name.value}
            icon={"EditIcon"}
            name={"name"}
            disabled={name.active}
            onIconClick={handleNameIconClick}
            onChange={(e) => setName({...name, value: e.target.value})}
          />
          <Input
            ref={loginRef} 
            type={'text'} 
            placeholder={'Логин'}  
            value={login.value}
            icon={"EditIcon"}
            name={"login"}
            disabled={login.active}
            onIconClick={handleLoginIconClick}
            onChange={(e) => setLogin({...login, value: e.target.value})}
          />
          <Input
            ref={passwordRef} 
            type={'password'} 
            placeholder={'Пароль'}  
            value={password.value}
            icon={"EditIcon"}
            name={"password"}
            disabled={password.active}
            onIconClick={handlePasswordIconClick}
            onChange={(e) => setPassword({...password, value: e.target.value})}
          />
          <div className={styles.handlers}>
            <Button 
              htmlType="button" 
              type="secondary" 
              size="medium"
              onClick={handleCancelClick}
            >
              Отмена
            </Button>
            <Button 
              htmlType="button" 
              type="primary" 
              size="medium"
              onClick={handleSaveClick}
            >
              Сохранить
            </Button>
          </div>
        </form>
  )
}