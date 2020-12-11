import React, { useState } from 'react'
import './App.css'
import LikeButton from './components/LikeButton'
import Hello from './components/Hello'
import TT from './components/test'
import SS from './components/SCSS'
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { renderRoutes } from 'react-router-config'
import { createHashHistory } from 'history'
import routes from './config/routes'
import MenuList from './Menu/Index'

export const history = createHashHistory()

interface IThemeProps {
  [key: string]: { color: string; background: string }
}
const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee',
  },
  dark: {
    color: '#fff',
    background: '#222',
  },
}

export const ThemeContext = React.createContext(themes.light)
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <div>
            <MenuList />
          </div>
          <Switch> {renderRoutes(routes)}</Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
