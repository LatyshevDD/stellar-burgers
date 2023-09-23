import React from "react"
import { useState } from "react"
import { ReactDOM } from "react"
import styles from "./login.module.css"
import { Link } from "react-router-dom"
import { Input, Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch } from "react-redux"
import { login } from "../../services/userDataSlice"

export default function Login() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            extraClass="mb-20"
            onClick={(e) => {
              e.preventDefault();
              dispatch(login({email: email, password: password}))
            }}
          >
            Войти
          </Button>
          <div className={styles.link_container}>
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