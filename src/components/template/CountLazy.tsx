import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const CountLazy = (props: React.JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={476}
    height={200}
    viewBox="0 0 476 200"
    backgroundColor="#d7d6d6"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="138" y="2" rx="3" ry="3" width="167" height="29" />
    <rect x="19" y="200" rx="3" ry="3" width="178" height="27" />
    <rect x="36" y="155" rx="0" ry="0" width="134" height="30" />
    <rect x="284" y="151" rx="0" ry="0" width="134" height="30" />
    <circle cx="224" cy="92" r="37" />
    <circle cx="222" cy="108" r="3" />
  </ContentLoader>
)

export default CountLazy

