import React from 'react';
import "./Sekund.scss"

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="stopwatch-btn stopwatch-btn-start"
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-stop"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn stopwatch-btn-reset"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-start"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-reset"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;