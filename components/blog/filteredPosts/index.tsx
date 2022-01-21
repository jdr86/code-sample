import React, { useEffect, useState } from "react"
import { postType } from "../../../pages"
import Button from "../../common/button"
import Header from "../../common/pageHeader"
import Card from "../card"
import FilteredHero from "../../../images/filtered-hero.png"
import FilteredBottomBg from "../../../images/filtered-bottom.png"
import FilteredDots from "../../../images/even-dots.png"
import SearchBg from "../../../images/search-bg.png"
import * as styles from "./filtered-posts.module.scss"
import Categories from "../categories";

const filteredPosts = ({ data }: { data: filteredTypes }) => {
  const [postCount, setPostCount] = useState(6)
  const [renderedPosts, setRenderPosts] = useState([])

  useEffect(() => {
    setRenderPosts([...data.filteredPosts].slice(0, postCount))
  }, [data.filteredPosts, postCount])

  const loadMore = () => {
    let count = postCount
    count = count + count
    setPostCount(count)
  }

  return (
    <div className={`${data.isSearch ? "pt-28 lg:pt-40" : data.isFilter ? "pt-20" : "pt-10"} relative pb-32 lg:pb-96`}>
      {!data.isSearch ? <img className="absolute top-0 left-0 right-0 w-full" src={FilteredHero} alt="" /> : <img className="absolute top-0 left-0 right-0 w-full" style={{ height: "155px" }} src={SearchBg} alt="" />}
      {renderedPosts.length !== 0 && <img className="absolute bottom-0 left-0 right-0 w-full" src={FilteredBottomBg} alt="" />}
      <div className={`${data.isSearch ? "pt-14" : undefined} container mx-auto px-6 relative z-10`}>
        {!data.isSearch && <img style={{ left: "-4%" }} className="absolute bottom-0" src={FilteredDots} alt="" />}
        {!data.isSearch && <Header layout="left" data={{ category: { name: data.category }, tag: "category" }} />}
        {data.isSearch && <div className="flex items-center mb-10">
          <p className="mr-4 uppercase text-gray-400 font-bold">Results</p>
          <p className="font-light">
            <span className="font-semibold">{renderedPosts.length}</span> article{renderedPosts.length > 0 && <span>(s) from {renderedPosts.length} posts</span>}
          </p>
        </div>}
        {renderedPosts.length === 0 &&
          <div className={`${styles.notFound} w-full px-6 py-6 lg:py-12 flex flex-col items-center`}>
            <svg width={46} height={47} viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 0.5C10.3086 0.5 0 10.8086 0 23.5C0 36.1914 10.3086 46.5 23 46.5C35.6914 46.5 46 36.1914 46 23.5C46 10.8628 35.775 0.603094 23.1582 0.515625C23.106 0.506227 23.0531 0.501002 23 0.5ZM23 2.5C34.6106 2.5 44 11.8894 44 23.5C44 35.1106 34.6106 44.5 23 44.5C11.3894 44.5 2 35.1106 2 23.5C2 11.8894 11.3894 2.5 23 2.5ZM15 16.5C14.2044 16.5 13.4413 16.8161 12.8787 17.3787C12.3161 17.9413 12 18.7044 12 19.5C12 20.2956 12.3161 21.0587 12.8787 21.6213C13.4413 22.1839 14.2044 22.5 15 22.5C15.7956 22.5 16.5587 22.1839 17.1213 21.6213C17.6839 21.0587 18 20.2956 18 19.5C18 18.7044 17.6839 17.9413 17.1213 17.3787C16.5587 16.8161 15.7956 16.5 15 16.5ZM31 16.5C30.2044 16.5 29.4413 16.8161 28.8787 17.3787C28.3161 17.9413 28 18.7044 28 19.5C28 20.2956 28.3161 21.0587 28.8787 21.6213C29.4413 22.1839 30.2044 22.5 31 22.5C31.7956 22.5 32.5587 22.1839 33.1213 21.6213C33.6839 21.0587 34 20.2956 34 19.5C34 18.7044 33.6839 17.9413 33.1213 17.3787C32.5587 16.8161 31.7956 16.5 31 16.5ZM23 27.5C16.5556 27.5 12.293 31.793 12.293 31.793C12.197 31.8851 12.1204 31.9955 12.0676 32.1176C12.0148 32.2397 11.9869 32.3712 11.9856 32.5042C11.9842 32.6373 12.0094 32.7692 12.0597 32.8924C12.11 33.0156 12.1844 33.1275 12.2784 33.2216C12.3725 33.3156 12.4844 33.39 12.6076 33.4403C12.7308 33.4906 12.8627 33.5158 12.9958 33.5144C13.1288 33.5131 13.2603 33.4852 13.3824 33.4324C13.5045 33.3796 13.6149 33.303 13.707 33.207C13.707 33.207 17.4444 29.5 23 29.5C28.5556 29.5 32.293 33.207 32.293 33.207C32.3851 33.303 32.4955 33.3796 32.6176 33.4324C32.7397 33.4852 32.8712 33.5131 33.0042 33.5144C33.1373 33.5158 33.2692 33.4906 33.3924 33.4403C33.5156 33.39 33.6275 33.3156 33.7216 33.2216C33.8156 33.1275 33.89 33.0156 33.9403 32.8924C33.9906 32.7692 34.0158 32.6373 34.0144 32.5042C34.0131 32.3712 33.9852 32.2397 33.9324 32.1176C33.8796 31.9955 33.803 31.8851 33.707 31.793C33.707 31.793 29.4444 27.5 23 27.5Z" fill="#262626" />
            </svg>
            <h2 className="my-6">Upss!</h2>
            <p className="text-center">We’re sorry, we couldn’t find a match for that</p>
            <ul>
              <li className="flex items-center mt-6">
                <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00016 11.17L1.83016 6.99997L0.410156 8.40997L6.00016 14L18.0002 1.99997L16.5902 0.589966L6.00016 11.17Z" fill="#363636" />
                </svg>
                <p className="ml-3">Check Spelling</p>
              </li>
              <li className="flex items-center mt-6">
                <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00016 11.17L1.83016 6.99997L0.410156 8.40997L6.00016 14L18.0002 1.99997L16.5902 0.589966L6.00016 11.17Z" fill="#363636" />
                </svg>
                <p className="ml-3">Try other keywords</p>
              </li>
              <li className="flex items-center mt-6">
                <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00016 11.17L1.83016 6.99997L0.410156 8.40997L6.00016 14L18.0002 1.99997L16.5902 0.589966L6.00016 11.17Z" fill="#363636" />
                </svg>
                <p className="ml-3">Try more general keywords</p>
              </li>
            </ul>
            <hr className="mt-6 mb-8 w-1/2 mx-auto border-t-0 border-b border-gray-300" />
            <div className="flex flex-col items-center" onClick={() => data.clearSearchResults()}>
              <Categories data={data.categories.slice(0, 4)} />
              <div className="h-6" />
              <Button accent="Filled" type="button" buttonType="info" data={{ text: "Back to Blog", link: "/" }} />
            </div>
          </div>
        }
        <div className="grid  gap-6 lg:grid-cols-3 relative z-10">
          {renderedPosts.length > 0 &&
            renderedPosts.slice(0, 9).map((post: postType, ind) => {
              let trimmedTitle = `${post.title.slice(0, 30)}...`
              return (
                <Card
                  key={ind}
                  size={"square"}
                  data={{
                    slug: post.slug,
                    title: trimmedTitle,
                    categories: post.categories.nodes,
                    author: post.author,
                    image: post.featuredImage.node,
                  }}
                />
              )
            })}
        </div>
        <div className={`mt-14 w-full flex justify-center ${data.filteredPosts.length < postCount ? "opacity-0 pointer-events-none" : undefined}`}>
          <Button type="button" data={{ text: "View More" }} onClickHandler={loadMore} buttonType="info" accent="Bordered" />
        </div>
      </div>
    </div>
  )
}
export default filteredPosts

interface filteredTypes {
  isSearch: boolean
  isFilter: boolean
  category: string
  categories: never[]
  filteredPosts: postType[]
  clearSearchResults: () => void
}
