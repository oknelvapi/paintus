import React from 'react';
import { LocalHospital, Public, Timeline } from '@material-ui/icons';


const Spinner = () => (
  <div className="Container_Spinner_Wrap">
    <div className="Container_Spinner">
      <div className="Container_Spinner_Icons">
        <LocalHospital />
        <Timeline />
        <Public />
        <div className="Container_Spinner_Loader" />
      </div>
    </div>
  </div>
);

export default Spinner;
