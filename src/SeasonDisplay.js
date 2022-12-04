import React from 'react'

const getSeason = (lat, month) => {
  if (month>2 && month<9){
    return lat > 0 ? 'summer':'winter';
  }
  else{
    return lat>0 ? 'winter':'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());


  return (
    <div>
      return <div>{season === 'winter' ? 'OMG! Its too cold' : 'Time to go to the water park'}</div>
    </div>
  )
}

export default SeasonDisplay
