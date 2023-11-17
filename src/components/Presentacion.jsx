import React from 'react'
import { Carousel } from 'react-bootstrap'

const Presentacion = () => {
  return (
    <Carousel controls={false}>
    <Carousel.Item interval={50000}>
      <img src="https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fbanner-1.webp?alt=media&token=c1536c73-8b8e-4b86-bb74-a4c1a1b6f47f" alt="Banner 1" width="100%" height="100%"/>
    </Carousel.Item>
    <Carousel.Item interval={50000}>
      <img src="https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fbanner-2.webp?alt=media&token=fea138e9-0e48-472b-9268-bb693b0f4dac" alt="Banner 2" width="100%" height="100%"/>
    </Carousel.Item>
    <Carousel.Item interval={50000}>
      <img src="https://firebasestorage.googleapis.com/v0/b/insawearecommerce.appspot.com/o/img%2Fbanner-3.webp?alt=media&token=eefbe7f3-54cb-4bd2-803a-be8953d70f13" alt="Banner 3" width="100%" height="100%"/>
    </Carousel.Item>
  </Carousel>
  )
}

export default Presentacion