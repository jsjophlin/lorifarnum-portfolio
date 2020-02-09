import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import "../styles/lib/slick.min.css"
import "../styles/lib/slick-theme.min.css"
import "../styles/carousel.css"

// React Slick carousel: https://react-slick.neostack.com/
const Carousel = ({ items }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {items ? (
        items.map(({ src, alt, name }, index) => (
          <img
            className="w-64 h-64"
            key={`${name}-${index}`}
            src={src}
            alt={alt || name}
          />
        ))
      ) : (
        <div>No items found</div>
      )}
    </Slider>
  )
}

Carousel.defaultProps = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

Carousel.propTypes = {
  items: PropTypes.array,
}

export default Carousel
