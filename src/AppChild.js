import React, {useState} from "react";

const AppChild = React.memo((props) => {

    const now = new Date();
    const moment = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    return (
        <div>
            <h1> App child time: {moment} </h1>
        </div>
    );
})


export default AppChild;
