import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    const navigations = [
        {
            text: '펄스 분석',
            link: '/'
        },
        {
            text: '미디어 비교 분석',
            link: '/users'
        },
        {
            text: '감성 비교 분석',
            link: '/popular'
        },
        {
            text: '미디어별 이슈어 분석',
            link: '/paginationApp'
        },
    ];
    return (
        <div>
            <ul className='nav'>
                {navigations.map(function(value, index) {
                    return (
                        <li>
                            <NavLink exact activeClassName='active' to={value.link}>
                                {value.text}
                            </NavLink>
                        </li>
                    )    
                })}
            </ul>
        </div>
    )
}

export default Navigation;