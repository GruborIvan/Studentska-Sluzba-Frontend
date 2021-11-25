import React from 'react';
import ProfesorLoginComponent from './login/ProfesorLoginComponent';
import StudentLoginComponent from './login/StudentLoginComponent';

const AuthComponent = () => {
    return (<div style={{ backgroundColor: 'black' }}> 
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
    </div>
    );
}

export default AuthComponent;