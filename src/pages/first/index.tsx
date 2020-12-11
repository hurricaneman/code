import React, { useContext } from 'react'
import axios from 'axios'
import { SERVER } from '../../config/service'
import { ThemeContext } from '../../App'

interface IHelloProps {}

function init() {
  return axios
    .post('/mobileapproval/queryPage', {}, { baseURL: SERVER })
    .then((res) => {})
}

const HelloFirst: React.FC<IHelloProps> = () => {
  const theme = useContext(ThemeContext)
  React.useEffect(() => {
    init()
  }, [])
  const style = {
    background: theme.background,
    color: theme.color,
  }
  return (
    <div style={style}>
      <div className="parent white">
        <div className="box green">1</div>
        <div className="box green">2</div>
        <div className="box green">3</div>
      </div>
    </div>
  )
}

export default HelloFirst
