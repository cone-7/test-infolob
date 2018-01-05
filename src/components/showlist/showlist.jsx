import React from 'react';
import PropTypes from 'prop-types';

import './showlist.css';

const ShowListComponent = (props) => {
  return (
    <div className="main-container">
      <div>
        <div className="container-log">
          <div className="row-log">
            Type
          </div>
          <div className="row-log">
            Number
          </div>
        </div>
      </div>
      <div>
        { props.phones.map( function(item){
            if(item.type)
              return (
                  <div className="container-log">
                    <div className="row-log">
                      {item.type}
                    </div>
                    <div className="row-log">
                      {item.number}
                    </div>
                  </div>
              )
          })
        }
      </div>
    </div>
  );
};

ShowListComponent.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    phone: PropTypes.number,
  })).isRequired
};

export default ShowListComponent;
