import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../App'
import { Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu
const MenuList: React.FC = () => {
  const [like, setLike] = useState(0)
  const [current, setcurrent] = useState('')
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log(theme)

  useEffect(() => {
    console.log('document title effect is running')
    document.title = `新能源`
  }, [like])
  const style = { background: '#0092ff', padding: '8px 0' }
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={12} md={12} lg={12}>
          <span> 武汉市新能源汽车及充电基础设施监测与管理平台</span>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div>
            <Menu mode="horizontal">
              <Menu.Item key="1">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/second">新闻动态</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/three">政策法规</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/four">相关服务</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default MenuList
