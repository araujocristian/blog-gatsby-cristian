import React from "react"
import PostItem from "../PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    title={hit.title}
    date={hit.date}
    timeToRead={hit.timeToRead}
    description={hit.description}
    category={hit.category}
  >
    {console.log("hit", hit)}
  </PostItem>
)

export default Hit
