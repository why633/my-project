import React from 'react'
import { Carousel } from 'antd';
import './homePage.scss'
const onChange = (a, b, c) => {
  console.log(a, b, c);
}
const Banner = () => (
  <div className='banner'>
    <Carousel autoplay dotPosition={'left'} afterChange={onChange}>
      <div>
        <img src={require('@/assets/homePageImg/banner1.jpg')} alt="" />
      </div>
      <div>
        <img src={require('@/assets/homePageImg/banner2.jpg')} alt="" />
      </div>
      <div>
        <img src={require('@/assets/homePageImg/banner3.jpg')} alt="" />
      </div>
      <div>
        <img src={require('@/assets/homePageImg/banner4.jpg')} alt="" />
      </div>
    </Carousel>
  </div>

)
export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Banner />
      </div>
    )
  }
}