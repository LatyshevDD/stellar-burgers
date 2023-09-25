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

  async function onSubmit(e) {
    e.preventDefault()
    try {
      let res = await resetPasswordRequest({password: password, token: token})
      console.log(res)
    } catch (e) {
      setError({hasError: true, errorMessage: e})
    }
  }

  return (
    <>
      <main className={styles.main}>
        <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
            extraClass="mb-20"
            onClick={() => onSubmit}
          >
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
        </form>
      </main>
    </>
  )
}