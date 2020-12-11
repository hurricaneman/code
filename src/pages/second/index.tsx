import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const HelloSecond: React.FC = () => {
  const theme = useContext(ThemeContext)

  const style = {
    background: theme.background,
    color: theme.color,
  }
  return (
    <div style={style}>
      <h1>第二个页面</h1>
    </div>
  )
}

export default HelloSecond
