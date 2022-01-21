import React from "react"
import * as styles from "./category.module.scss"
const Category = ({ title }) => {
  return <p className={`table ${styles.category}`}>{title}</p>
}

export default Category
