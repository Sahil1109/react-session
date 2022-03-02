import { useEffect, useMemo, useState } from "react";

const UseMemoHook=()=>{
    const [number, setNumber]= useState(0);
    const [dark, setDark]= useState(false);

    const doubleNumber = useMemo(()=>{
        return slowFunction(number);
    }, [number])


    const themeStyles =  useMemo(()=>{
        return {
            backgroundColor: dark ? 'black': 'white',
            color: dark ? 'white': 'black'
        };
    },[dark])

    useEffect(()=>{
        console.log("Theme changed")
    },[themeStyles])



    return(
        <>
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}></input>
        <button onClick={()=> setDark(prevDark => !prevDark)}>Change theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

const slowFunction=(num)=>{
    console.log("Slow function called");
    for (let i=0;i<=10000;i++){}
    return num*2
}
export default UseMemoHook