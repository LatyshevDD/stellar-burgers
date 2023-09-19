import React from "react"
import { ReactDOM } from "react"
import styles from "./register.module.css"
import AppHeader from "../../components/AppHeader/app_header"
import { Link } from "react-router-dom"
import { Input, Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"

export default function Register() {
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
            value={""}
            onChange={e => console.log(e)}
            name={'name'}
          />
          <EmailInput 
            placeholder={'E-mail'} 
            extraClass="mt-6" 
            value={""}
            onChange={e => console.log(e)}
            name = {'email'}
          />
          <Input 
            type={'password'} 
            placeholder={'Пароль'} 
            extraClass="mt-6 mb-6" 
            value={""}
            onChange={e => console.log(e)}
            icon={"ShowIcon"}
            name={"password"}
          />
          <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
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