import React, { useState, useEffect } from 'react';
import { AtomParagraph } from 'atoms';
import { MoleculeTimer } from 'molecules';

interface Set {
    duration: number;
    resting: boolean;
    exercise?: object;
}

type props = {
  sets: Array<Set>;
};


const OrganismSetTimer = ({sets} : props) => {
    const [setCount, setSetCount] = useState(0);
    const [currentSet, setCurrentSet] = useState({
        duration: 0,
        resting: false
    });

    useEffect(() => {
        if (setCount <= sets.length - 1) {
            setCurrentSet(sets[setCount]);
        }
    }, [setCount, currentSet])

    function updateSet() {
        setSetCount(setCount + 1);
    }

    function maybeRenderTimer() {
        if (setCount <= sets.length - 1) {
            return <MoleculeTimer set={currentSet} updateSet={updateSet}/>
        } else {
            return (
                <AtomParagraph text="All done!" />
            )
        }
    }
    return (
        maybeRenderTimer()
    )
}

export default OrganismSetTimer