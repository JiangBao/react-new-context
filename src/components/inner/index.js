import React from 'react';
import { Consumers } from '../../store';

const Inner = () => (
  <Consumers>
    {
      ({actions}) => (
        <div className="inner">
          <button onClick={actions.increment}>increment</button>
        </div>
      )
    }
  </Consumers>
);

export default Inner;
