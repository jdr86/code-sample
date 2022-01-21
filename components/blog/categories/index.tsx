import React from "react"
import Category from "../../common/category"
import * as styles from "./categories.module.scss"
import { Link } from "gatsby";

const Categories = ({ data, isNavigate }: CategoriesTypes) => {
  return (
    <div className={`flex flex-wrap items-center ${styles.categories}`}>
      {isNavigate && <p className={`${styles.title} opacity-50 mr-5`}>Categories</p>}

      {data.length > 0 &&
        data.map((category, idx) => {
          return (
            <Link key={idx} to={isNavigate?`#${category.slug}`:`/#${category.slug}`} className={`cursor-pointer hidden lg:block ${idx !== 0 ? "ml-5" : undefined}`}>
              <Category key={idx} title={category.name} />
            </Link>
          )
        })}
    </div >
  )
}
export default Categories
interface CategoriesTypes {
  data: { name: string; slug: string }[]
  isNavigate?: boolean
}
