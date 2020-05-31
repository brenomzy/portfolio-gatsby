import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ZoomImage = ({src, alt}) => (
  <Zoom>
    <img
      alt={alt}
      src={src}
      width="864"
    />
  </Zoom>
)

export default ZoomImage