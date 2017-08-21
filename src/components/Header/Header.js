import React from 'react'
import {IndexLink, Link} from 'react-router'
import './Header.scss'

export const Header = () => (
    <div>
        <h1>React Redux Demo</h1>
        <h2><a href='https://github.com/Aus0049' target='_blank'>Aus</a></h2>
        <IndexLink to='/' activeClassName='route--active'>
            主页
        </IndexLink>
        {' · '}
        <Link to='/user' activeClassName='route--active'>
            个人中心
        </Link>
        {' · '}
        <Link to='/list' activeClassName='route--active'>
            列表页
        </Link>
        {' · '}
        <Link to='/notFound' activeClassName='route--active'>
            404
        </Link>
    </div>
)

export default Header
