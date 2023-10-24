import React from 'react'
import { Carousel } from 'react-bootstrap'

const Presentacion = () => {
  return (
    <Carousel controls={false}>
    <Carousel.Item interval={50000}>
      <img src="/img/banner-1.webp" alt="Banner 1" width="100%" height="100%"/>
    </Carousel.Item>
    <Carousel.Item interval={50000}>
      <img src="/img/banner-2.webp" alt="Banner 2" width="100%" height="100%"/>
    </Carousel.Item>
    <Carousel.Item interval={50000}>
    <img src="/img/banner-3.webp" alt="Banner 3" width="100%" height="100%"/>
    </Carousel.Item>
  </Carousel>
  )
}

export default Presentacion