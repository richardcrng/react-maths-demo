import React from 'react';
import { useClickAway } from 'react-use';
import DemoKeypad from './Keypad';
import DemoApp from './App';
import { MathsEnabler, isAMathQuillElement } from 'react-maths';

function Demo() {
  // eslint-disable-next-line no-unused-vars
  const [showKeypad, setShowKeypad] = React.useState(true)

  const handleKeypadHide = () => setShowKeypad(false)
  const handleKeypadShow = () => setShowKeypad(true)

  const keypadRef = React.useRef()
  useClickAway(keypadRef, (event) => {
    if (isAMathQuillElement(event.target)) {
      console.log('a mathquill-block', event.target)
    } else {
      console.log('not a mathquill-block', event.target)
      handleKeypadHide()
    }
  })

  return (
    <MathsEnabler>
      <DemoApp {...{ handleKeypadHide, handleKeypadShow }} />
      <DemoKeypad
        ref={keypadRef}
        style={{
          position: 'absolute',
          bottom: '0px',
          height: '40vh',
          width: '100%'
        }}
        when={showKeypad}
      />
    </MathsEnabler>
  )
}

export default Demo;