import React, { useState } from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Icons
import ArrowIcon from './icons/arrows'

// Import Swiper styles
import 'swiper/swiper.min.css'
// Style Module
import sty from './styles.module.scss'

const CalendarStrip = () => {
  /**
   * States
   */
  const [slider, setSlider] = useState()
  const [current, setCurrent] = useState({
    // Current year seted
    year: 'YYYY',
    // Current month seted
    month: 'MM'
  })

  // List of days in base of month/year
  const [slots, setSlots] = useState([
    { day: '1', name: 'Mon' },
    { day: '2', name: 'Tue' },
    { day: '3', name: 'Wed' },
    { day: '4', name: 'Thu' },
    { day: '5', name: 'Fri' },
    { day: '6', name: 'Sat' },
    { day: '7', name: 'Sun' },
    { day: '8', name: 'Mon' },
    { day: '9', name: 'Tue' },
    { day: '10', name: 'Wed' },
    { day: '11', name: 'Thu' },
    { day: '12', name: 'Fri' },
    { day: '13', name: 'Sat' },
    { day: '14', name: 'Sun' },
    { day: '15', name: 'Mon' },
    { day: '16', name: 'Tue' },
    { day: '17', name: 'Wed' },
    { day: '18', name: 'Thu' },
    { day: '19', name: 'Fri' },
    { day: '20', name: 'Sat' },
    { day: '21', name: 'Sun' },
    { day: '22', name: 'Mon' },
    { day: '23', name: 'Tue' },
    { day: '24', name: 'Wed' },
    { day: '25', name: 'Thu' },
    { day: '26', name: 'Fri' },
    { day: '27', name: 'Sat' },
    { day: '28', name: 'Sun' }
  ])

  /**
   * Function accept type to allow change state in base of it.
   */
  const onChangeCurrent = ({ type, value }) => {
    // Validate type (for props)
    const checkTypes = type.includes(['year', 'month'])
    // Return error if types are not valid
    if (checkTypes) throw new Error('type param invalid')

    setCurrent((e) => ({ ...e, [type]: value }))
  }

  return (
    <div>
      <div className={sty.cal_container}>
        {/* HEADER */}
        <div className={sty.cal_head}>
          <span>February 2021</span>
        </div>

        {/* CONTENT */}
        <div className={sty.cal_content}>
          {/* NAV - LEFT */}
          <div className={sty.cal_nav_left}>
            <ArrowIcon.Left
              className={sty.cal_nav_arrow_left}
              onClick={() => slider.slidePrev()}
            />
          </div>

          {/* SLOTS */}
          <Swiper
            spaceBetween={1}
            slidesPerView={7}
            onSwiper={setSlider}
            className={sty.cal_slider_content}
          >
            {slots.map((e, k) => (
              <SwiperSlide key={k}>
                <div className={sty.cal_slider_slots}>
                  <p>{e.name}</p>
                  <span>{e.day}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAV - RIGHT */}
          <div className={sty.cal_nav_right}>
            <ArrowIcon.Right
              className={sty.calendar_head_arrow}
              onClick={() => slider.slideNext()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

CalendarStrip.defaultProps = {}

CalendarStrip.propTypes = {}

export default CalendarStrip
