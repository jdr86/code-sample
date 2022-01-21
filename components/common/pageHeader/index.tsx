import React from "react"
import Button from "../button"
import * as styles from "./header.module.scss"
import { ButtonTypes } from "../button"
const Header = ({ layout, data, handleClick, topHeader }: HeaderType) => {
  const handleViewClick = () => {
    handleClick && handleClick(data.category.slug)
  }
  return (
    <div className={`py-5 lg:py-10 ${styles.header}`}>
      <div className={`${data.button ? "flex flex-col lg:flex-row lg:items-end lg:justify-between" : "mx-auto"}`}>
        <div className={`${layout === "left" ? "" : "flex flex-col items-center"}`}>
          <p className={`uppercase opacity-50 ${styles.category}`}>{data.tag}</p>
          {(layout === "center" || topHeader) ? (
            <h1 id={data.category.slug ? data.category.slug : undefined} className={`${!topHeader ? "text-center" : undefined} pt-16 -mt-8 mb-8`}>
              {data.category.name}
            </h1>
          ) : (
            <h2 id={data.category.slug ? data.category.slug : undefined} className="pt-16  -mt-8 mb-8">
              {data.category.name}
            </h2>
          )}
          <div className={`${styles.bar}`} />
        </div>
        {data.button && <div className="mt-10 lg:mt-0"><Button type="button" data={data.button.data} onClickHandler={handleViewClick} arrowRight buttonType="info" accent="Transparent" /></div>}
      </div>
    </div>
  )
}
export default Header
export interface HeaderType {
  layout: "center" | "left"
  data: {
    category: {
      name: string
      slug?: string
    }
    tag: String
    button?: ButtonTypes
  }
  topHeader?: boolean
  handleClick?: (slug: string) => void
}
