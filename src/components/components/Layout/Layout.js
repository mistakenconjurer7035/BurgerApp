import React from 'react';
import Aux from '../../../HOC/Auxillary'
import './Layout.css'

const layout = (props) => (

  <Aux>
    <div className="Divs">Toolbar etc...</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;