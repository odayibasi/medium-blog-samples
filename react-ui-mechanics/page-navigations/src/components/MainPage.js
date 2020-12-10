import {routes} from '../routes';
import React, {useState} from 'react';

export const MainPage = (props) => {

    const [username, setUserName] = useState('username');
    const [company, setCompany] = useState('company');


    const companyPath=routes.company.path.replace(':company',company);
    const companyUserPath=routes.companyUsers.path.replace(':company',company).replace(':user',username);


    return (<div className={'page-container'}>I'm a MainPage
        <button onClick={(e) => props.handlePageChange(routes.login.path)}>Logout</button>
        <button onClick={(e) => props.handlePageChange(routes.settings.path)}>SettingPage</button>

        <div style={{border: '#fabeee 2px solid'}}>
            <input type='text' value={company} onChange={(e) => setCompany(e.target.value)} placeholder='company'/>
            <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='username'/>
            <button onClick={(e) => props.handlePageChange(companyPath)}>Go To Company</button>
            <button onClick={(e) => props.handlePageChange(companyUserPath)}>Go To UserName</button>
        </div>
    </div>)
}
