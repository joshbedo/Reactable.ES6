import React from 'react';
import Immutable from 'immutable';
const D = React.DOM

var ClassName = React.createClass({
  getInitialState () {
    console.log('getting initial state for foo class');
    return {};
  },

  render () {
    return D.h1(null, "Whaddddup ES6!");
  },

    
});

export default React.createFactory( ClassName );
