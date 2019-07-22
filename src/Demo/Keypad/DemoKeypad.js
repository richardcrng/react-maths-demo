import React from 'react';
import { MdArrowBack, MdArrowDownward, MdArrowForward, MdArrowUpward, MdSend } from 'react-icons/md';
import { MathsKeypad } from 'react-maths';

function DemoKeypad({ onInput, style, when, ...rest }, ref) {
  return (
    <MathsKeypad ref={ref} {...{ onInput, style, when, ...rest }}>
      <MathsKeypad.Row weight={0.5}>
        <MathsKeypad.Key component={MdArrowBack} keystroke="Left" />
        <MathsKeypad.Key component={MdArrowForward} keystroke="Right" />
        <MathsKeypad.Key component={MdArrowUpward} keystroke="Up" />
        <MathsKeypad.Key component={MdArrowDownward} keystroke="Down" />
      </MathsKeypad.Row>
      <MathsKeypad.Row>
        <MathsKeypad.Key latex='$\square^{\square}$' cmd='^' />
        <MathsKeypad.Key
          latex='$\sqrt[\square]{\square}$'
          commands={[{ write: '\\sqrt[]{}' }, { keystroke: ['Left', 'Left'] }]}
        />
        <MathsKeypad.Key latex='$e$' write='e' />
        <MathsKeypad.Key latex='$x$' write='x' />
        <MathsKeypad.Key latex='$y$' write='y' />
        <MathsKeypad.Key latex='$z$' write='z' />
      </MathsKeypad.Row>
      <MathsKeypad.Row>
        <MathsKeypad.Key latex='$\square^{2}$' cmd='^2' />
        <MathsKeypad.Key latex='$\sqrt{\square}$' cmd='\sqrt' />
        <MathsKeypad.Key latex='$k$' write='k' />
        <MathsKeypad.Key latex='$n$' write='n' />
        <MathsKeypad.Key latex='$($' write='(' />
        <MathsKeypad.Key latex='$)$' write=')' />
      </MathsKeypad.Row>
      <MathsKeypad.Row>
        <MathsKeypad.Key html={7} cmd='7' />
        <MathsKeypad.Key html={8} cmd='8' />
        <MathsKeypad.Key html={8} cmd='9' />
        <MathsKeypad.Key html="DEL" keystroke='Backspace' />
        <MathsKeypad.Key html="AC" keystroke={['Ctrl-A', 'Backspace']} />
      </MathsKeypad.Row>
      <MathsKeypad.Row>
        <MathsKeypad.Key html={4} cmd='4' />
        <MathsKeypad.Key html={5} cmd='5' />
        <MathsKeypad.Key html={6} cmd='6' />
        <MathsKeypad.Key latex="$\times$" cmd='\times' />
        <MathsKeypad.Key latex="$\dfrac{\square}{\square}$" cmd='\frac' />
      </MathsKeypad.Row>
      <MathsKeypad.Row>
        <MathsKeypad.Key html={1} cmd='1' />
        <MathsKeypad.Key html={2} cmd='2' />
        <MathsKeypad.Key html={3} cmd='3' />
        <MathsKeypad.Key latex="$+$" cmd='+' />
        <MathsKeypad.Key latex="$-$" cmd='-' />
      </MathsKeypad.Row>
      <MathsKeypad.Row>
        <MathsKeypad.Key html={0} cmd='0' />
        <MathsKeypad.Key latex="$.$" cmd='.' />
        <MathsKeypad.Key latex="$,$" cmd=',' />
        <MathsKeypad.Key component={MdSend} weight={2} />
      </MathsKeypad.Row>
    </MathsKeypad>
  )
}

// eslint-disable-next-line no-func-assign
DemoKeypad = React.forwardRef(DemoKeypad)
DemoKeypad.displayName = 'DemoKeypad'

export default DemoKeypad;