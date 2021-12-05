import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfesorLoginComponent from './login/ProfesorLoginComponent';
import StudentLoginComponent from './login/StudentLoginComponent';

const AuthComponent = () => {

    const { push } = useHistory();

    return (<div> 
        <div className="ui placeholder segment" style={{ marginTop: 40 }}>
            <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">ILI</div>
                <div className="middle aligned row">
                    <div className="column">
                        <ProfesorLoginComponent />
                    </div>
                    <div className="column">
                        <StudentLoginComponent />
                    </div>
                </div>
            </div>
        </div>
        <button className="ui secondary button" style={{ marginTop: 30, marginLeft: 20 }} onClick={() => push('/admin')}> 
            Administratorske preferencije 
        </button>
    </div>
    );
}

export default AuthComponent;