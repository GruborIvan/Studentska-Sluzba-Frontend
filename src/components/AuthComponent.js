import React, { useState } from 'react';
import ProfesorLoginComponent from './login/ProfesorLoginComponent';
import StudentLoginComponent from './login/StudentLoginComponent';
import AdminLoginComponent from './admin/AdminLoginComponent'

const AuthComponent = () => {

    const [adminAvailable, setAdminAvailable] = useState(false);

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

        <div style={{ overflow: 'hidden' }}>
            <button className="ui secondary button" style={{ marginTop: 30, marginLeft: 20, float: 'left' }} onClick={() => setAdminAvailable(!adminAvailable)}>
                Administratorske preferencije
            </button>
            
            {
                adminAvailable === false
                ?
                <div></div>
                :
                <AdminLoginComponent/>
            }
        </div>



    </div>
    );
}

export default AuthComponent;