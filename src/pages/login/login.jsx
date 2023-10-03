import React from "react"
import { useState } from "react"
import { ReactDOM } from "react"
import styles from "./login.module.css"
import { Link } from "react-router-dom"
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../services/userDataSlice"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const error = useSelector((store) => store.userData.isError)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    await dispatch(login({email: email, password: password}))
    navigate(location.state.from || '/profile')
  }

  return (
    <>
      <main className={styles.main}>
        <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p className="text text_type_main-medium">
            Вход
          </p>
          <EmailInput 
            placeholder={'E-mail'} 
            extraClass="mt-6" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            name = {'email'}
          />
          <PasswordInput 
            placeholder={'Пароль'} 
            extraClass="mt-6 mb-6" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            icon={"ShowIcon"}
            name={"password"}
          />
          <Button 
            htmlType="submit" 
            type="primary" 
            size="medium" 
            onClick={onSubmit
            }
          >
            Войти
          </Button>
          { 
            error
            &&
            (
              <p className="text text_type_main-default text_color_inactive mt-4">
                Неверный e-mail или пароль
              </p>
            ) 
          }
          <div className={`${styles.link_container} mt-20`}>
            <p className="text text_type_main-default text_color_inactive">
              Вы - новый пользователь?
            </p>
            <Link to="/register" style={{textDecoration: 'none', color: '#4C4CFF'}}>
              <p className='text text_type_main-default'>
                Зарегистрироваться
              </p>
            </Link>
          </div>
          <div className={styles.link_container}>
            <p className="text text_type_main-default text_color_inactive mt-4">
              Забыли пароль?
            </p>
            <Link to="/forgot-password" style={{textDecoration: 'none', color: '#4C4CFF'}}>
              <p className='text text_type_main-default mt-4'>
                Восстановить пароль
              </p>
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}