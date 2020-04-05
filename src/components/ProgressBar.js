import React from 'react'
import PropTypes from 'prop-types'

function ProgressBar(props){
    return (
        <div className="progress-bar">
          <div className="filler" style={{ width: `${props.percentage}%` }} />
        </div>
      )
}

ProgressBar.propTypes ={
    percentage: PropTypes.number,
}

export default ProgressBar;
