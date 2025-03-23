import React, { useEffect, useRef, useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'

const StopWatch = () => {
    const [time,setTime] = useState({hr:0,min:0,sec:0});
    const [isRunning,setIsRunning] = useState(false);
    const timeRef = useRef(0);

    useEffect(()=> {
        return () => clearInterval(timeRef.current);
    },[])

    function handleStartAndStop() {
        if(!isRunning) {
            timeRef.current = setInterval(()=> {
                setTime((prevTime)=> {
                    if(prevTime.sec === 60) {
                        return {...prevTime, min : prevTime.min + 1, sec : 0};
                    }
                    if(prevTime.min === 60) {
                        return {...prevTime, hr : prevTime.hr + 1, min : 0};
                    }
                    return {...prevTime, sec : prevTime.sec + 1};
                })
            },1000)
        }
        else {
            clearInterval(timeRef.current);
        }
        setIsRunning(!isRunning);
    }

    function handleReset() {
        clearInterval(timeRef.current);
        setTime({hr:0, min:0, sec:0});
        setIsRunning(false);
    }
  return (
    <div className='admin-container'>
      <AdminSidebar/>
      <main className='dashboard-app-container'>
        <h1>Stopwatch</h1>
        <section>
            <div className='stopwatch'>
                <h2>{`${time.hr.toLocaleString().padStart(2,0)} : ${time.min.toLocaleString().padStart(2,0)} : ${time.sec.toLocaleString().padStart(2,0)}`}</h2>
                <button onClick={handleStartAndStop}>{isRunning? "Stop" : "Start"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </section>
      </main>
    </div>
  )
}

export default StopWatch
