import React from 'react'

function Block(props) {

  return (
    <div className="block-feature">
      <div className="thumbnail">
        <img className="img" src={ props.feature.image.src } alt={ props.feature.image.alt } />
        <button className="btn btn-ecru">
          <img className="icon" src={ require('@/assets/images/icons/media-play.svg') } alt="" />
        </button>
      </div>
      <div className="line"></div>
      <h6 className="block-title">{ props.feature.title }</h6>
    </div>
  )
}

export default Block
