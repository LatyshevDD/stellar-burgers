import React, {ReactDOM} from "react"
import styles from './spinner.module.css'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function Spinner() {
  
  return (
    <main className={styles.main}>
      <FontAwesomeIcon icon={faSpinner} spin size="2xl" style={{color: "#cfd6e2",}} />    
    </main>
  )
}