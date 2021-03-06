import React, { useState, useEffect }  from 'react';
import moment from 'moment'

const StartStopContext = React.createContext();

const StartStopProvider = (props) => {
  let [ toggleBase, setToggleBase ] =  useState(false) 
 
  const [ textValue , setTextValue ] =  useState("Start Trip ") 
  let  [count, setCount] =  useState(0) // counter
  let  [now, setNow] =  useState(0) // Runs all the time so it is the current time
  let  [start, setStart] =  useState(0) // counter

  let interval = null;
  const timerController = () => {
    interval = setInterval(() => {
      setCount(count => count + 1);
    }, 100)
  }


  useEffect(() => {
    if (toggleBase) {
      timerController()
    } else if (!toggleBase && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [toggleBase]);


    return (
      <StartStopContext.Provider
        value={{
          toggleBase,
          textValue,
          now,
          start,
          count, 
          interval, 
          setToggleBase,
          setTextValue,
          setCount,
          setNow,
          setStart,
          timerController,
        
        }} 
      >        
        {props.children}
      </StartStopContext.Provider>

    )
  }

export { StartStopProvider, StartStopContext };