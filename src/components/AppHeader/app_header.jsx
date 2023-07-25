import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app_header.module.css';

export default function AppHeader() {
  return (
  <header className={styles.header}>
    <nav className={`${styles.nav} ${'mt-4'} ${'mb-4'}`}>
      <a className={`${styles.link_constructor} ${'pl-5'} ${'pr-5'}`}>
        <BurgerIcon type="primary" />
        <p className="text text_type_main-default ml-2">
          Конструктор
        </p>
      </a>
      <a className={`${styles.link_list} ${'pl-5'} ${'pr-5'} ${'ml-2'}`}>
        <ListIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive ml-2">
          Лента заказов
        </p>
      </a>
      <Logo/>
      <a className={`${styles.link_lk} ${'pl-5'} ${'pr-5'}`}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive ml-2">
          Личный кабинет
        </p>
      </a>
    </nav> 
  </header>
  );
}