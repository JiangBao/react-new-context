import React from 'react';
import { Consumers } from '../../store';
import Inner from '../inner';

const Middle = () => {
  return (
    <Consumers>
      {
        ({states}) => (
          <div className="middle">
            <span>count: {states.count}</span>
            <Inner />
          </div>
        )
      }
    </Consumers>
  )
}

export default Middle;
