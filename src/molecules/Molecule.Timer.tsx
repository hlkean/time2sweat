import React, {useState, useEffect} from 'react';
import {AtomParagraph, AtomHeadingH1, AtomButton} from '../atoms';
interface Exercise {
    name: string;
    difficulty: number;
}
interface Set {
    duration: number;
    resting: boolean;
    exercise?: Exercise;
}


type props = {
  set: Set,
  updateSet: () => void
};

const MoleculeTimer = ({set, updateSet} : props) => {
  let intervalId: null | ReturnType<typeof setInterval> = null;
  const [timer, setTimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);
  const [prevSet, setPrevSet] = useState({
    duration: 0,
    resting: false
  });

  if(set !== prevSet) {
    setTimer(set.duration);
    setPrevSet(set);
  }

  useEffect(() => {
    intervalId = null;
    if (timerStatus) {
      intervalId = setInterval(updateClock, 10);
    } else if (!timerStatus && timer !== 0) {
      stopClock();
    }
    return () => clearInterval(Number(intervalId));
  }, [timerStatus, timer]);

  function toggleClock() {
    setTimerStatus(!timerStatus);
    if (!intervalId) {
      intervalId = setInterval(updateClock, 1000);
    } else if (!timerStatus)  {
      stopClock();
    }
  }

  function updateClock() {
    if (timer > 0 && timerStatus) {
      setTimer(timer - .01);
    } else if (timer <= 0 ) {
      updateSet();
    } else {
      stopClock();
    }
  }

function stopClock() {
  clearInterval(Number(intervalId));
  setTimerStatus(false);
  // release our intervalID from the variable
  intervalId = null;
}

function resetClock() {
    stopClock();
    setTimer(set.duration);
    setPrevSet(set);
}

  return (
    <div>
      <AtomHeadingH1 text={"Time to sweat!"} />
      {set.exercise && <AtomParagraph text={`Current Exercise: ${set.exercise.name}`} />}
      <AtomParagraph text={set.resting ? 'Catch your breath for' : 'Keep pushing for'} />
      <AtomParagraph className="big-time" text={set.resting ? timer.toFixed(0) : timer.toFixed(2)} />
      <AtomParagraph text={'seconds'} />
      <AtomButton text={timerStatus ? "Stop the timer" : "Start the timer"} onClick={toggleClock} />
      <AtomButton text={"Reset Timer"} onClick={resetClock} />
    </div>
  );
}

export default MoleculeTimer;