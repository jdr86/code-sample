import React from "react"
import * as styles from "./subscribe.module.scss"
import Letter from "../../../../images/letter.png"
import Button from "../../button"
const Subscribe = ({ setSubscribeSuccess }) => {
  return (
    <div className={`fixed z-50 inset-0 w-full h-full flex items-center justify-center ${styles.popoverContainer}`}>
      <div onClick={() => setSubscribeSuccess(false)} className={`absolute inset-0 w-full h-full z-10 bg-black bg-opacity-50 ${styles.overlay}`} />
      <div className={`relative z-20 flex justify-center items-center ${styles.popover}`}>
        <div className={`flex flex-col items-center text-center ${styles.popoverInner}`}>
          <img src={Letter} alt="newsletter" />
          <h4>Thank you for subscribing!</h4>
          <p className="mt-3">You have successfully subscribed to our list.</p>
          <div className="w-full mt-4 mb-10" onClick={() => setSubscribeSuccess(false)}>
            <Button data={{ text: "Got it" }} type="button" buttonType="info" accent="Filled" fullWidth />
          </div>
          <p>Want to see more about us?</p>
          <div onClick={() => setSubscribeSuccess(false)} className="font-bold mt-2">
            <Button data={{ text: "Explore our blog", link: "/" }} type="button" buttonType="primary" accent="Transparent" arrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Subscribe
