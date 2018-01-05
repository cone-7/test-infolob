import React from 'react';
import PropTypes from 'prop-types';

const ShowListComponent = (props) => {
  return (
    props.phones.map( function(item){
        return (
            <div>
            {item}
                <div>
                    {item.type}
                </div>
                <div>
                    {item.phone}
                </div>
            </div>
        )
    })
  );
};

ShowListComponent.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    phone: PropTypes.number,
  })).isRequired
};

export default ShowListComponent;
