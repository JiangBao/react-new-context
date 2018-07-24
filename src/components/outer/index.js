import React from 'react';
import Middle from '../middle';
import { Consumers } from '../../store';

const Outer = () => (
  <Consumers>
    {
      ({actions}) => (
        <div className="outer">
          <button onClick={actions.decrement}>decrement</button>
          <Middle />
        </div>
      )
    }
  </Consumers>
);

export default Outer;
