import React from "react"
import { ReactDOM } from "react"
import { Form } from "react-router-dom"
import { Input } from "@ya.praktikum/react-developer-burger-ui-components"

export default function ProfileForm() {
  return (
    <Form style={{display: "flex", gap: '24px', flexDirection: "column", alignItems: "center", marginTop: '120px'}}>
          <Input 
            type={'text'} 
            placeholder={'Имя'}  
            value={"Марк"}
            onChange={e => console.log(e)}
            icon={"EditIcon"}
            name={"name"}
            disabled={true}
          />
          <Input 
            type={'text'} 
            placeholder={'Логин'}  
            value={"mail@stellar.burgers"}
            onChange={e => console.log(e)}
            icon={"EditIcon"}
            name={"login"}
            disabled={true}
          />
          <Input 
            type={'password'} 
            placeholder={'Пароль'}  
            value={"1234"}
            onChange={e => console.log(e)}
            icon={"EditIcon"}
            name={"password"}
            disabled={true}
          />
        </Form>
  )
}