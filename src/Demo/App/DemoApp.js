import React from 'react';
import { MathsInput, useActiveHtmlElementState } from 'react-maths';

function DemoApp({ handleKeypadHide, handleKeypadShow }) {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useActiveHtmlElementState()
  const inputRefOne = React.useRef()
  const inputRefTwo = React.useRef()
  
  return (
    <>
      <MathsInput
        ref={inputRefOne}
        id='inputOne'
        onFocus={handleKeypadShow}
        onClick={handleKeypadShow}
        style={{ display: 'block', margin: '10px', width: '50px' }}
      />
      <MathsInput
        ref={inputRefTwo}
        id='inputTwo'
        onFocus={handleKeypadShow}
        onClick={handleKeypadShow}
        style={{ display: 'block', margin: '10px', width: '50px' }}
      />
    </>
  )
}

export default DemoApp;