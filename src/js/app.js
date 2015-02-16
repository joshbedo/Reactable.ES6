import React from 'react';
import AppComponent from './components/foo';

export default {
	launch () {
   React.render(
     AppComponent(),
     document.getElementById('app')
   )
  }
}
