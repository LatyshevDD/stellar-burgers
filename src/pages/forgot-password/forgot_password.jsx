import React, {useState} from "react"
import { ReactDOM } from "react"
import styles from "./forgot_password.module.css"
import { Link, useNavigate } from "react-router-dom"
import { Input, Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components"
import { forgotPasswordRequest } from "../../utils/api"

export default function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [error, setError] = useState({hasError: false, errorMessage: ''})
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await forgotPasswordRequest(email)
      navigate('/reset-password')
    } catch (e) {
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
          <EmailInput 
            placeholder={'Укажите e-mail'} 
            extraClass="mt-6 mb-6" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name = {'email'}
          />
          <Button 
            htmlType="submit" 
            type="primary" 
            size="medium" 
            onClick={handleSubmit}
          >
            Восстановить
          </Button>
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