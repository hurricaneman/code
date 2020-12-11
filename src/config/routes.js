/* eslint-disable react/display-name */
import React from 'react'
import { Redirect } from 'react-router-dom'

import First from '../pages/first'
import Second from '../pages/second'
import Three from '../pages/three'
import Four from '../pages/four'

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/first"></Redirect>,
  },

  {
    path: '/first',
    component: First,
  },
  {
    path: '/second',
    component: Second,
  },
  {
    path: '/three',
    component: Three,
  },
  {
    path: '/four',
    component: Four,
  },
]
