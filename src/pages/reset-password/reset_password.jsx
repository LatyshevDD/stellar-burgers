import React, {useState} from "react"
import { ReactDOM } from "react"
import styles from "./reset_password.module.css"
import { Link } from "react-router-dom"
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { resetPasswordRequest } from "../../utils/api"

export default function ResetPassword() {

  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const [error, setError] = useState({hasError: false, errorMessage: ''})
  const [success, setSuccess] = useState({hasSuccess: false, successMessage: ''})

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await resetPasswordRequest({password: password, token: token})
      setSuccess({hasSuccess: res.success, successMessage: res.message})
    } catch(e) {
      setError({hasError: true, errorMessage: e})
    }
  }

  return (
    <>
      <main className={styles.main}>
        <form className={styles.form}>
          <p className="text text_type_main-medium">
            Восстановление пароля
          </p>
          <Input 
            type={'password'} 
            placeholder={'Введите новый пароль'} 
            extraClass="mt-6" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            icon={"ShowIcon"}
            name={"password"}
          />
          <Input 
            type={'text'} 
            placeholder={'Введите код из письма'} 
            extraClass="mt-6 mb-6" 
            value={token}
            onChange={e => setToken(e.target.value)}
            name={"token"}
          />
          <Button 
            htmlType="submit" 
            type="primary" 
            size="medium" 
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
          { 
            success.hasSuccess
            &&
            (
              <p className="text text_type_main-default text_color_inactive mt-4">
                {success.successMessage}
              </p>
            ) 
          }
          { 
            error.hasError
            &&
            (
              <p className="text text_type_main-default text_color_inactive mt-4">
                {error.errorMessage}
              </p>
            ) 
          }
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
        </form>
      </main>
    </>
  )
}