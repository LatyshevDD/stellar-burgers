import React from "react"
import { ReactDOM } from "react"
import styles from "./login.module.css"
import { Form, Link } from "react-router-dom"
import { Input, Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"

export default function Login() {
  return (
    <>
      <main className={styles.main}>
        <Form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p className="text text_type_main-medium">
            Вход
          </p>
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
        </Form>
      </main>
    </>
  )
}