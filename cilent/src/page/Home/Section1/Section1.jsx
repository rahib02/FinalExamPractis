import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Section1.css'
function Section1() {
    return (
        <Carousel className='section1'>
            <Carousel.Item className='section1_item'>
                <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div>
                        <span>Get you</span>
                        <div><span>Education</span></div>
                        <span>today!</span>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='section1_item'>
                <img
                    className="d-block w-100"
                    src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div>
                        <span>Get you</span>
                        <div><span>Education</span></div>
                        <span>today!</span>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Section1