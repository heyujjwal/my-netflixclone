import React from 'react'
import './Card.css'
export default function Card(props) {
    const imageUrl = `https://image.tmdb.org/t/p/original/${props.poster}`;
    const youtubeUrl = `https://www.youtube.com/embed/`;
  return (
    <div>
    <img className='card_poster' src={imageUrl} alt='poster' />
    </div>
  )
}
