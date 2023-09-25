import React, {useState} from "react"
import { ReactDOM } from "react"
import styles from "./profile.module.css"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Input } from "@ya.praktikum/react-developer-burger-ui-components"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../services/userDataSlice"

export default function Profile() {

  const dispatch = useDispatch()
  const location = useLocation().pathname
  const navigate = useNavigate()
  const [active, setActive] = useState(false)

  async function onLogout(e) {
    setActive(true)
    e.preventDefault()
    await dispatch(logout())
    navigate('login')
  }
  
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {(location === '/profile' || location === '/profile/orders')
          &&
          <div className={styles.sidebar}>
            <nav className={styles.nav}>
              <NavLink 
                to='/profile' 
                className={({ isActive}) =>
                  isActive ? styles.active : styles.pending
                }
                end
              >
                Профиль
              </NavLink>
              <NavLink 
                to='orders' 
                className={({ isActive}) =>
                  isActive ? styles.active : styles.pending
                }
                end
              >
                История заказов
              </NavLink>
              <NavLink 
                to='/login'
                className={active ? styles.active : styles.pending }
                onClick={onLogout}
                end
              >
                  Выход
              </NavLink>
            </nav>
            <p className="text text_type_main-default text_color_inactive">
            {location === '/profile' ? 
              'В этом разделе вы можете изменить свои персональные данные' :
              location === '/profile/orders' ?
              'В этом разделе вы можете просмотреть свою историю заказов' :
              ''}
            </p>
          </div>
        }
        <Outlet/>
      </section>  
    </main>
  )
}