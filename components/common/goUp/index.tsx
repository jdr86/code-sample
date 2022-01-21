import React, { useState, useEffect } from "react"
import { isBrowser } from "../../../utils"
const GoUp = () => {
  const [isVisible] = useState(true)
  // useEffect(() => {
  //   window.onscroll = () => {
  //     let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  //     scrollTop >= 1200 ? setIsVisible(true) : setIsVisible(false)
  //   }
  // })

  const scrollToTop = () => {
    if (isBrowser) window.scroll(0, 0)
  }
  return (
    <div onClick={scrollToTop} className={`${isVisible ? "goUp flex items-center justify-center rounded-full cursor-pointer z-50" : "opacity-0 pointer-events-none"} transition-all duration-300 `}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6673 11L19.7873 12.88L12.334 5.43996V21.6666H9.66732V5.43996L2.22732 12.8933L0.333984 11L11.0007 0.333294L21.6673 11Z" fill="white" />
      </svg>
      <style>
        {
          `
          .goUp{
            width:76px;
            height:76px;
            background: #377DFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            position:fixed;
            right:100px;
            bottom:180px;
          }
          @media only screen and (max-width: 1080px){
            .goUp{
              width: 56px;
              height: 56px;
              background: #377DFF;
              box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
              position: fixed;
              right: 50px;
              bottom: 60px;
            }
          }
        `
        }
      </style>
    </div>
  )
}
export default GoUp;