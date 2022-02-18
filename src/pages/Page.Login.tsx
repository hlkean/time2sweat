import React, { useState, useEffect } from 'react';
import { OrganismSetTimer } from 'organisms';
import { AtomButton } from 'atoms';
import {createWorkout, generateSets} from 'utils/exercise'

const PageLogin = () => {
    const list = createWorkout(8);
    const sets = generateSets(list);
    return (
        <div>
            <AtomButton text={"Login to Spotify"} onClick={() => {console.log("login clicked")}} />
            <OrganismSetTimer sets={sets}/>
        </div>

    )
}

export default PageLogin;