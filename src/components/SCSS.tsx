import React, { useContext } from 'react'
import { ThemeContext } from '../App'
interface IHelloProps {
  message?: string
}

const SCSS: React.FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className="test">
      <button className="button-submit">继承样式</button>
      <div className="danger">测试混入=样式合并</div>
    </div>
  )
}
SCSS.defaultProps = {
  message: 'Hello World',
}

export default SCSS
