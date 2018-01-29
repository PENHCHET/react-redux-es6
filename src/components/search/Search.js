import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div className='search-container'>
                <div className='search-area'>
                    <input type='text' placeholder='펄스입력'/>
                </div>
                <div className='signin-area'>
                    <input type='email' placeholder='이메일' className='email'/>
                    <input type='password' placeholder='비밀번호' className='password'/>
                    <button className='btnLogin'>로그인</button>
                    <button className='btnQuery'>서비스 문의</button>
                </div>
            </div>
        )
    }
}

export default Search;