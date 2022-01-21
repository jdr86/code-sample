import React from "react";
import * as styles from "./social-icons.module.scss"
import { ClapsIcon, FacebookIconRound, InstaIconRound, InIconRound, PsIconRound, TwitterIconRound } from "../../common/icons";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { postType } from "../../../templates/post-details";
import { isBrowser } from "../../../utils";
const SocialIcons = ({ orientation, isFixed, post }: socialType) => {
  let shareUrl = isBrowser && window.location.href;
  return (
    <div className={`${orientation === "vertical" ? "hidden lg:block flex-col items-start pl-5" : "flex-col lg:flex-row items-center lg:items-stretch"} flex ${isFixed ? `${styles.fixed} fixed left-0` : undefined}`}>
      {/* <div className={`${orientation === "vertical" ? "hidden lg:block border-b mb-5 pb-5" : "lg:border-r lg:mr-5 lg:pr-5"} border-gray-300 cursor-pointer`}>
        <ClapsIcon />
      </div> */}
      <div className={`${styles.socialIcons} ${orientation === "horizontal" ? styles.horizontal : styles.vertical} ${orientation === "vertical" ? "flex-col items-start" : "flex-row my-4 lg:mt-0 items-center justify-center"} flex`}>
        <FacebookShareButton hashtag="blog" quote={post.title} url={shareUrl} children={<div className={`rounded-full ${styles.facebook}`}><FacebookIconRound /></div>} />
        {/* <InstapaperShareButton url={shareUrl} children={<InstaIconRound />} /> */}
        <LinkedinShareButton title={post.title} summary={post.excerpt} url={shareUrl} children={<div className={`rounded-full ${styles.linkedIn}`}><InIconRound /></div>} />
        {/* <PinterestShareButton media={shareUrl} url={shareUrl} children={<PsIconRound />} /> */}
        <TwitterShareButton url={shareUrl} children={<div className={`rounded-full ${styles.twitter}`}><TwitterIconRound /></div>} />
      </div>
    </div>
  )
}
export default SocialIcons;
interface socialType {
  orientation: "horizontal" | "vertical"
  isFixed?: boolean
  post: postType
}