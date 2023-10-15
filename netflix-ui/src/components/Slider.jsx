import React from 'react'
import CardSlider from './CardSlider'

export default React.memo(function Slider({ movies }) {

  const getmovies = (from, to) => {
    return movies.slice(from, to)
  }
  return (
    <div>
      <CardSlider title="Trending Now" data={getmovies(0, 10)} />
      <CardSlider title="New Releases" data={getmovies(10, 20)} />
      <CardSlider title="Action" data={getmovies(20, 30)} />
      <CardSlider title="Comedy" data={getmovies(30, 40)} />
      <CardSlider title="Romantic" data={getmovies(40, 50)} />
      <CardSlider title="Epics  " data={getmovies(50, 60)} />
    </div>
  )
});
