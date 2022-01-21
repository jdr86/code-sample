import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import arraySort from "array-sort";
import Header from "../common/pageHeader";
import Card from "./card";

const LatestPosts = () => {
  const wpData = useStaticQuery(graphql`
  {
    wpgraphql {
      posts {
        nodes {
          date
          slug
          title(format: RENDERED)
          content(format: RENDERED)
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`)
let posts: [] = wpData.wpgraphql.posts.nodes
const sortedPosts = arraySort(posts, "date", { reverse: true })
  return (
    <div className="container mx-auto px-6 mb-12 lg:mb-32">
      <Header layout="left" data={{ category: { name: "Latest posts" }, tag: "Technology and Trends" }} />
      <div className="grid lg:grid-cols-3 gap-6">
        {sortedPosts.length === 0 && <p>No posts found</p>}
        {sortedPosts.length > 0 &&
          sortedPosts.slice(0, 3).map((post, idx) => {
            return (
              <Card
                key={idx}
                size={"square"}
                data={{
                  slug: post.slug,
                  title: `${post.title.slice(0, 40)} ...`,
                  categories: post.categories.nodes,
                  author: post.author,
                  image: post.featuredImage.node,
                }}
              />
            )
          })}
      </div>
    </div>
  )
}
export default LatestPosts;