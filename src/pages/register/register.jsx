import React from "react"
import { useState } from "react"
import { ReactDOM } from "react"
import styles from "./register.module.css"
import AppHeader from "../../components/AppHeader/app_header"
import { Link } from "react-router-dom"
import { Input, Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { registerRequest } from "../../utils/api"

export default function Register() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <>
      <main className={styles.main}>
        <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p className="text text_type_main-medium">
            Регистрация
          </p>
          <Input 
            type={'text'} 
            placeholder={'Имя'} 
            extraClass="mt-6" 
            value={name}
            onChange={e => setName(e.target.value)}
            name={'name'}
          />
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
            onClick={(e) => 
              {
                e.preventDefault();
                registerRequest({email: email, password: password, name: name});
              }  
            }
          >
            Зарегистрироваться
          </Button>
          <div className={styles.link_container}>
            <p className="text text_type_main-default text_color_inactive">
              Уже зарегистрированы?
            </p>
            <Link to="/login" style={{textDecoration: 'none', color: '#4C4CFF'}}>
              <p className='text text_type_main-default'>
                Войти
              </p>
            </Link>
          </div>
        </form>
      </main>
    </>
  )
}