import React from "react"
import { ReactDOM } from "react"
import styles from "./profile.module.css"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Form } from "react-router-dom"
import { Input } from "@ya.praktikum/react-developer-burger-ui-components"
import { Outlet } from "react-router-dom"

export default function Profile() {

  const location = useLocation().pathname

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sidebar}>
          <nav className={styles.nav}>
            <NavLink className={({ isActive, isPending }) =>
                        isActive
                          ? styles.active
                          : isPending
                          ? styles.pending
                          : ""
                      }
            >
              Профиль
            </NavLink>
            <NavLink className={({ isActive, isPending }) =>
                        isActive
                          ? styles.active
                          : isPending
                          ? styles.pending
                          : ""
                      }
            >
              История заказов
            </NavLink>
            <NavLink className={({ isActive, isPending }) =>
                        isActive
                          ? styles.active
                          : isPending
                          ? styles.pending
                          : ""
                      }
            >
              Выход
            </NavLink>
          </nav>
          <p className="text text_type_main-default text_color_inactive">
            {location === '/profile' && 'В этом разделе вы можете изменить свои персональные данные'}
          </p>
        </div>
        <Outlet/>
      </section>  
    </main>
  )
}