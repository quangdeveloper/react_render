import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AppChild from "./AppChild";

function App() {

    const [count, setCount] = useState(0);
    const [reload, setReload] = useState(false);

    let now = new Date();
    const moment = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    const handleClick = async () => {
        console.log("count1: " ,count);
        await  setCount(count + 1);
        console.log("count2: " ,count);
        if (count == 5)  {
            console.log("count3: " ,count);
            setReload(!reload);
        }
    }

    const changeReload = (status) => {
        setCount(count + 1);
        setReload(status);
    }

    return (
        <div>
            <h1>Data in put</h1>
            <input type="text"></input>
            <h2>count is {count} </h2>
            <h2>now:{moment} </h2>
            <button onClick={handleClick}>Click count</button>
            {/*<button onClick={changeReload(true)}>Click count</button>*/}
            <h1>
                App child
            </h1>
            <AppChild reload={reload}/>
        </div>
    );
}

export default App;
