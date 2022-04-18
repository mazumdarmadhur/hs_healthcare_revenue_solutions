import React from 'react'
import slider1 from '../../assets/slider1.svg'
import slider2 from '../../assets/slider2.svg'
import slider3 from '../../assets/slider3.svg'
import { NavLink } from 'react-router-dom'

const Slider = () => {
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <NavLink to='/contact'>
                            <img src={slider1} class="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <NavLink to='/PaymentPosting'>
                            <img src={slider2} class="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <NavLink to='/Credentialing'>
                            <img src={slider3} class="d-block w-100" alt="..." />
                        </NavLink>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider