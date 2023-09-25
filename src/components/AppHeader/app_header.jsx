import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app_header.module.css'
import { NavLink, Outlet } from "react-router-dom"

export default function AppHeader() {
  return (
    <>
      <header className={styles.header}>
      <nav className={`${styles.nav} mt-4 mb-4`}>
        <NavLink 
          to="/"
          className={({ isActive}) => isActive ? styles.active : styles.pending}
          end
        >
          <div className={`${styles.link_constructor} ml-5 mr-5`}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">
              Конструктор
            </p>
          </div>
        </NavLink>
        <NavLink 
          to="/feed"
          className={({ isActive}) => isActive ? styles.active : styles.pending}
          end
        >
          <div className={`${styles.link_list} ml-5 ml-2`}>
            <ListIcon type="primary" />
            <p className="text text_type_main-default ml-2">
              Лента заказов
            </p>
          </div>
        </NavLink>
        <Logo/>
        <NavLink 
          to="/profile"
          className={({ isActive}) => isActive ? styles.active : styles.pending}
          end
        >
          <div className={`${styles.link_lk} mr-5`}>
            <ProfileIcon type="primary" />
            <p className="text text_type_main-default ml-2">
              Личный кабинет
            </p>
          </div>
        </NavLink>
      </nav> 
      </header>
      <Outlet/>
    </>
  
  );
}