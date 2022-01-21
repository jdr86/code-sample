import React from "react"
import Category from "../../common/category"
import * as styles from "./card.module.scss"
import { ArrowRight } from "../../common/icons"
import { Link } from "gatsby"
const card = ({ colSpan, size, data }: cardTypes) => {
  return (
    <Link to={`/blog/${data.slug}`} className={`relative cursor-pointer overflow-hidden flex items-end h-full ${styles.card} ${colSpan ? styles.colSpan : styles[size]}`}>
      <img className="absolute inset-0 z-0 w-full h-full object-cover object-center" alt={data.image.alt} src={data.image.mediaItemUrl} />
      <div className={`${styles.overlay} absolute inset-0 w-full h-full z-10`} />
      <div className={`${styles.overlayDark} absolute inset-0 w-full h-full z-20`} />
      <div className={`${styles.content} relative z-30`}>
        <div className="flex flex-wrap items-center -ml-1">
          {data.categories.map((category, idx) => {
            return (
              <div key={idx} className={"m-1"}>
                <Category key={idx} title={category.name} />
              </div>
            )
          })}
        </div>
        <h3 className="my-5">{data.title}</h3>
        <p className="author">{data.author.name}</p>
        <div className={`flex items-center ${styles.more}`}>
          <p>Learn more</p>
          <ArrowRight />
        </div>
      </div>
    </Link>
  )
}
export interface cardTypes {
  size: "square" | "square-lg" | "rectangle"
  colSpan?: boolean
  data: {
    categories: [
      {
        name: string
      }
    ]
    title: String
    author: { name: string }
    image: {
      mediaItemUrl: string
      alt: string
    }
    slug: string
  }
}
export default card
