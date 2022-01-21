import React, { useEffect, useState,useRef } from "react"
import Categories from "../categories"
import { SearchIcon } from "../../common/icons"
import Button from "../../common/button"

const CategoryHeader = ({ data }: categoryHeaderType) => {
  const [isSearch, setIsSearch] = useState(data.isSearch)
  const [isList, setIsList] = useState(false);
  const inputEl = useRef(null);
  useEffect(() => {
    setIsSearch(data.isSearch)
  }, [data.isSearch])
  return (
    <>
      <div className="pt-10 flex items-center justify-between relative">
        {!isSearch && !data.isFilter && <Categories isNavigate data={data.categories} />}
        {data.isFilter && !isSearch && <Button type="button" data={{ text: "Back to blog" }} onClickHandler={data.handleClick} arrowLeft buttonType="primary" accent="Transparent" />}
        {!isSearch && !data.isFilter && (
          <div className="cursor-pointer w-4 h-4 lg:w-auto lg:h-auto" onClick={() => { setIsSearch(true); inputEl.current.focus(); }}>
            <SearchIcon />
          </div>
        )}
      </div>


      <div className={`${isSearch ? "pt-12" : undefined} flex items-center justify-between relative`}>
        <div className={`${isSearch ? "search-expand" : "search-collapse"} right-0 top-0 absolute`}>
          <svg className={`w-4 lg:w-6 h-4 lg:h-6 inset-0 absolute m-auto ml-3 lg:ml-6`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#363636" />
            </g>
          </svg>
          <input
            ref={inputEl} 
            value={data.searchQuery}
            onChange={e => {
              data.handleSearch(e.target.value)
            }}
            className="w-full border border-gray-300 rounded pl-10 lg:pl-20 pr-3 lg:pr-6 py-2.5 lg:py-5"
            placeholder="Search"
          />
          <svg
            className={`cursor-pointer w-4 lg:w-6 h-4 lg:h-6 inset-0 absolute m-auto mr-3 lg:mr-6`}
            onClick={() => {
              data.handleClearSearch()
              setIsSearch(false)
            }}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#363636" />
          </svg>
        </div>
      </div>
      {!isSearch && !data.isFilter && <div className="mt-4 lg:hidden">
        <div onClick={() => setIsList(!isList)} className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer">
          All
          <div>
            {isList ? (
              <div>
                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z" fill="#1F2937" />
                </svg>
              </div>
            ) : (
              <div>
                <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z" fill="#1F2937" />
                </svg>
              </div>
            )}
          </div>
        </div>
        {isList && (
          <div className="w-64 mt-2 p-4 bg-white shadow rounded">
            {data.categories.length > 0 && data.categories.map((category, idx) => {
              return (
                <a href={`#${category.slug}`} onClick={() => setIsList(!isList)} className="cursor-pointer">
                  <div className="py-3" key={idx}>
                    <p className="text-sm leading-normal font-medium text-gray-800">{category.name}</p>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </div>}
    </>

  )
}
export default CategoryHeader
interface categoryHeaderType {
  data: {
    isSearch: boolean
    isFilter: boolean
    categories: { name: string; slug: string }[]
    handleSearch: (e: string) => void
    handleClearSearch: () => void
    handleClick: () => void
    searchQuery: string
  }
}
