import React from "react"
import { ReactDOM } from "react"
import styles from "./forgot_password.module.css"
import { Form, Link } from "react-router-dom"
import { Input, Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"

export default function ForgotPassword() {
  return (
    <>
      <main className={styles.main}>
        <Form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p className="text text_type_main-medium">
            Восстановление пароля
          </p>
          <EmailInput 
            placeholder={'Укажите e-mail'} 
            extraClass="mt-6 mb-6" 
            value={""}
            onChange={e => console.log(e)}
            name = {'email'}
          />
          <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
            Восстановить
          </Button>
          <div className={styles.link_container}>
            <p className="text text_type_main-default text_color_inactive">
              Вспомнили пароль?
            </p>
            <Link to="/login" style={{textDecoration: 'none', color: '#4C4CFF'}}>
              <p className='text text_type_main-default'>
                Войти
              </p>
            </Link>
          </div>
        </Form>
      </main>
    </>
  )
}