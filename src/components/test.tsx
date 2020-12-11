import React, { useContext } from 'react'
import { ThemeContext } from '../App'
interface IHelloProps {
  message?: string
}

const Ttt: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color: theme.color,
  }
  return <h2 style={style}>{props.message}</h2>
}
Ttt.defaultProps = {
  message: '--------------------路由切换代码-------',
}

export default Ttt
