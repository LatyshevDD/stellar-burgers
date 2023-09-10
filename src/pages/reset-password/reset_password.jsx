import React from "react"
import { ReactDOM } from "react"
import styles from "./reset_password.module.css"
import { Form, Link } from "react-router-dom"
import { Input, Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"

export default function ResetPassword() {
  return (
    <>
      <main className={styles.main}>
        <Form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p className="text text_type_main-medium">
            Восстановление пароля
          </p>
          <Input 
            type={'password'} 
            placeholder={'Введите новый пароль'} 
            extraClass="mt-6" 
            value={""}
            onChange={e => console.log(e)}
            icon={"ShowIcon"}
            name={"password"}
          />
          <Input 
            type={'text'} 
            placeholder={'Введите код из письма'} 
            extraClass="mt-6 mb-6" 
            value={""}
            onChange={e => console.log(e)}
            name={"code"}
          />
          <Button htmlType="submit" type="primary" size="medium" extraClass="mb-20">
            Сохранить
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