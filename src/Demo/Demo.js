import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from 'react-use';
import DemoKeypad from './Keypad';
import DemoApp from './App';
import { MathsEnabler, isAMathQuillElement } from 'react-maths';
import { actions } from '../redux/leaves';

function Demo() {
  const dispatch = useDispatch()
  const isKeypadShowing = useSelector(state => state.isKeypadShowing)

  const handleKeypadHide = () => dispatch(actions.isKeypadShowing.create.off())
  const handleKeypadShow = () => dispatch(actions.isKeypadShowing.create.on())

  const keypadRef = React.useRef()
  useClickAway(keypadRef, (event) => {
    if (!isAMathQuillElement(event.target)) handleKeypadHide()
  })

  return (
    <MathsEnabler>
      <DemoApp {...{ handleKeypadHide, handleKeypadShow }} />
      <DemoKeypad
        ref={keypadRef}
        onInput={(e, { element, mathField }) => dispatch(actions[element.id].create.update(mathField.latex()))}
        style={{
          position: 'absolute',
          bottom: '0px',
          height: '40vh',
          width: '100%'
        }}
        when={isKeypadShowing}
      />
    </MathsEnabler>
  )
}

export default Demo;