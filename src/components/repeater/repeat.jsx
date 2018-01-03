import React from 'react';
import PropTypes from 'prop-types';

import ButtonComponent from '../button/button.jsx';
import DropPlusInputComponent from '../dropplusinput/dropplusinput.jsx';

const RepeatComponent = (props) => {
  return (
    <div>
      { 
        props.data.map(function(item) {
          return (
            <div>
              {{item}}
            </div>
          )
        })
      }
    </div>
  );
};

RepeatComponent.propTypes = {
  data: PropTypes.array,
};

export default RepeatComponent;
