import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'
import { OrganismSetTimer } from './organisms';
import {createWorkout, generateSets} from './utils/exercise'

const list = createWorkout(8);
const sets = generateSets(list);
ReactDOM.render(
    <OrganismSetTimer sets={sets}/>,
    document.getElementById('app-root'),
)