import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export default function DogBreedImages(props) {
  const {images} = props
  return (
    <div className="dog-breed-images">
      <h1>Images for breed {props.breed}</h1>
      <div>
        {images && images.map(url => <img key={url} src={url} alt="Dog" />)}
        {!images && "Loading..."}
      </div>
      This page will show images of a specific dog breed.
      <Link to="/">Go back to the index</Link>
    </div>
  )
}

DogBreedImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}