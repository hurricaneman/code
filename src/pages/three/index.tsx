import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

const HelloThree: React.FC = () => {
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color,
  }
  return (
    <div style={style}>
      <h1>第三个页面</h1>
    </div>
  )
}

export default HelloThree
