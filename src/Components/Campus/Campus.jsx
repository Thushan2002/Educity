import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Media/gallery-1.png'
import gallery_2 from '../../assets/Media/gallery-2.png'
import gallery_3 from '../../assets/Media/gallery-3.png'
import gallery_4 from '../../assets/Media/gallery-4.png'
import white_arrow from '../../assets/Media/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" srcset="" />
            <img src={gallery_2} alt="" srcset="" />
            <img src={gallery_3} alt="" srcset="" />
            <img src={gallery_4} alt="" srcset="" />
        </div>
        <button className="btn dark-btn">See More Here <img src={white_arrow} alt="" srcset="" /></button>
    </div>
  )
}

export default Campus