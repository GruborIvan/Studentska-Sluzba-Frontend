import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Logout } from '../store/actions';
import { currentlyLoggedSelector } from '../store/selectors';


const Header = () => {

    const user = useSelector(currentlyLoggedSelector);
    const dispatch = useDispatch();
    const { push } = useHistory();

    const onLogout = () => {
        dispatch(Logout());
        push('/login'); 
    }

    useEffect(() => {
        
    }, [user])

    return (<div style={{ width: '100%', backgroundColor: 'DeepSkyBlue', height: 130, overflow: 'hidden' }}>

        <div style={{ float: 'left' }}>
            <img src="../FTN-Logo.png" alt="FTN" style={{ height: 100, width: 100, marginTop: 10, marginLeft: 25 }} />
        </div>

        <div>
            <h1 style={{ marginLeft: 110, marginTop: 20, float: 'left' }}> Web servis studentske službe Fakulteta Tehničkih nauka </h1>
        </div>

        <div>
            {
                user === null ?
                    <div></div>
                    :
                    <div style={{ marginTop: 10 }}>
                        <h3 className="ui right aligned header" style={{ marginRight: 40 }}>
                            <i className="address card icon"></i>
                            {user.Username}
                        </h3>
                        {user.Type === 'STUDENT' ?
                            <button className="ui small green button" style={{ float: 'left', marginLeft: 400 }} onClick={() => push('/studentinfo')}> Informacije o studentu </button>
                            :
                            <button className="ui small green button" style={{ float: 'left', marginLeft: 400 }} onClick={() => push('/profinfo')}> Informacije o profesoru </button>
                        }
                        <button className="ui small red button" style={{ marginLeft: 1300, float: 'left', marginTop: 5 }} onClick={() => onLogout()}> Odjava </button>
                    </div>
            }

        </div>

    </div>)
}

export default Header;