import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'
import { PageLogin } from 'pages';

ReactDOM.render(
    <PageLogin />,
    document.getElementById('app-root'),
)