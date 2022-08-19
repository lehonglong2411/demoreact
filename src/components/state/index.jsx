import React, {useState} from "react";
// viet components;

const DemoState = () => {
    const [year, setYear] = useState(0);

    const showCurrentYear = () => {
      setYear(2022);
    }

    return (
      <div onClick={showCurrentYear}>
        <br/>
        <br/>
        <br/>
        Set Year o day >>> {year}
      </div>
    )
}

export default DemoState;