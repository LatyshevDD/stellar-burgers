import React from "react"
import styles from './page_404.module.css'
import { Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useNavigate } from "react-router-dom"

export default function Page404() {

  const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <p className="text text_type_main-large">
        Oops!
      </p>
      <p className="text text_type_main-large">
        Page not found
      </p>
      <Button 
        htmlType="button" 
        type="primary" 
        size="small" 
        extraClass="ml-2"
        onClick={() => navigate('/')}
      >
        Вернуться на главную
      </Button>
    </main>
  )
}