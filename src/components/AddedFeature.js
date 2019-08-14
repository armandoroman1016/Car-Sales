import React from 'react';
import { connect } from 'react-redux';


const AddedFeature = props => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.featureName} (${props.feature.featurePrice})
    </li>
  );
};

export default AddedFeature;
