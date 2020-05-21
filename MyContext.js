import React, { useState }  from 'react';
//export const StartStopContext = React.createContext({
//    isTracking: false,
//    toggleTimer: () =>{},
//  });
//
//export const StartStopContextProvider = StartStopContext.Provider
//export const StartStopContextConsumer = StartStopContext.Consumer

const StartStopContext = React.createContext();
const StartStopProvider = (props) => {
  const [ toggleBase, setToggleBase ] =  useState(true) 
  const [ textValue , setTextValue ] =  useState("Start Trip ") // : "Trip Running"
  //const [ toggleBase ] =  useState(true) 
    //state = {
    //  toggleBase: true
    //}
  //
   // setToggleBase = (toggleBase) => {
   //  this.setState({toggleBase})
   // }
  //

    return (
      <StartStopContext.Provider
        value={{
          toggleBase,
          textValue,
          setToggleBase,
          setTextValue
        }} 
      >        
        {props.children}
      </StartStopContext.Provider>

    )
  }

export { StartStopProvider, StartStopContext };