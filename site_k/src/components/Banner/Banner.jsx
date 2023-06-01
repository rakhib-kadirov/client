import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import banner from '../../pictures/banner-left1.png'

const Banner = () => {
    return (
        <div className="content-width">
            <div className="banner-left_1">
                <Link>
                    <img className="banner-photo" src={banner} />
                </Link>
            </div>
        </div>
    )
}

export default Banner