import React, { useState } from "react"
import Button from "../button"
import PageHeader from "../pageHeader"
import gallery from "./data.json"
import * as styles from "./newsletter.module.scss"
import Deco from "../../../images/news-deco.png"
import Subscribe from "./subscribe";
import { SUBSCRIBE_TO_NEWSLETTER_URL } from "../../../constants"
import Notifications from "../notifications";

const Newsletter = ({ data }: NewsletterTypes): JSX.Element => {
  const [email, setEmail] = useState("")
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [subscribeError, setSubscribeError] = useState(false);
  const [loading, setLoading] = useState(false)
  const subscribe = async () => {
    setLoading(true)
    const result = await fetch(SUBSCRIBE_TO_NEWSLETTER_URL, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }).then(res => { setLoading(false); return res.json() }).catch(err => { setLoading(false); return { error: err } })
    result?.tracingId ? setSubscribeSuccess(true) : setSubscribeError(true);
    setEmail("")
  }

  return (
    <>
      {subscribeSuccess && <Subscribe setSubscribeSuccess={setSubscribeSuccess} />}
      {subscribeError && <Notifications />}
      <div className={`w-full relative`}>
        <div className="relative">
          <div className="block lg:hidden flex justify-center items-center">
            <img src={Deco} alt="left decoration item" />
          </div>
          <img className={`${styles.deco} left-0 absolute hidden lg:block `} src={Deco} alt="left decoration item" />
          <img className={`${styles.deco} right-0 absolute hidden lg:block `} src={Deco} alt="right decoration item" />
          <div className={`pt-8 lg:pt-24 px-6 container mx-auto pb-24 ${styles.centered}`}>
            <PageHeader layout="center" data={{ category: { name: data.title }, tag: data.tag }} />
            <form
              onSubmit={e => {
                e.preventDefault()
                subscribe()
              }}
              className="flex flex-col lg:flex-row items-stretch mt-10"
            >
              <input
                value={email}
                type="email"
                required
                onChange={e => {
                  setSubscribeError(false)
                  setEmail(e.target.value)
                }}
                className="w-full py-2 px-4 border mb-4 lg:mb-0 border-gray-300 rounded mr-4"
                placeholder="Email"
              />
              <Button disabled={loading} type="submit" data={{ text: "Subscribe" }} buttonType="info" accent="Filled" />
            </form>
          </div>
          <div className="block lg:hidden flex justify-center items-center">
            <img src={Deco} alt="left decoration item" />
          </div>
        </div>

        <div className={`grid gap-2 grid-cols-4 mt-14 polygon`}>
          {gallery.images.map((image, idx) => {
            return (
              <div key={idx} className="relative">
                <img className="absolute inset-0 object-cover w-full h-full" alt="" src={image.url} />
              </div>
            )
          })}
        </div>

        <style>
          {`
      .polygon{
        clip-path: polygon(0% 0%, 0% 0%, 0 38%, 100% 0%, 100% 100%, 0 100%);
        height: 543px;
      }
      @media screen and (max-width: 1099px) {
        .polygon{
          height: 123px;
        }
      }
      `}
        </style>
      </div>
    </>
  )
}
export default Newsletter
interface NewsletterTypes {
  data: {
    tag: string
    title: string
  }
}
