import React from "react"
import { useState, useRef, useEffect } from "react"
import { ReactDOM } from "react"
import { Input } from "@ya.praktikum/react-developer-burger-ui-components"
import styles from './profile_form.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch, useSelector } from "react-redux"
import { changeUser } from "../../services/userDataSlice"

export default function ProfileForm() {

  const userData = useSelector(store => store.userData.user)

  const dispatch = useDispatch()

  const [name, setName] = useState({active: true, value: ''})
  const [login, setLogin] = useState({active: true, value:''})
  const [password, setPassword] = useState({active: true, value:''})
  const [buttonsState, setButtonsState] = useState(false)

  useEffect(
    () => {
      setName({active: true, value: userData.name})
      setLogin({active: true, value: userData.email})
    },
    []
  )

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
    setButtonsState(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(changeUser({name: name.value, login: login.value, password: password.value }))
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            ref={nameRef} 
            type={'text'} 
            placeholder={'Имя'}  
            value={name.value}
            icon={"EditIcon"}
            name={"name"}
            disabled={name.active}
            onIconClick={handleNameIconClick}
            onChange={(e) => {
                setButtonsState(true)
                setName({...name, value: e.target.value})
              }   
            }
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
            onChange={(e) => {
                setButtonsState(true)
                setLogin({...login, value: e.target.value})
              }
            }
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
            onChange={(e) => {
                setButtonsState(true)
                setPassword({...password, value: e.target.value})
              }
            }
          />
          {
            buttonsState
            &&
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
              htmlType="submit" 
              type="primary" 
              size="medium"
            >
              Сохранить
            </Button>
          </div>
          }
        </form>
  )
}