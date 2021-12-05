import React from 'react';
import IspitniRokAddComponent from './IspitniRokAddComponent';
import IspitniRokList from './IspitniRokList';

const AdminPreferences = () => {

    return <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'left', marginLeft: 70 }}>
            <h3 className="ui center aligned header" style={{ marginTop: 30 }}> Ispitni rokovi </h3>
            <div className="ui raised segment" style={{ width: 750 }}>
                <IspitniRokList/>
            </div>
        </div>
        <div style={{ float: 'left', marginLeft: 100 }}>
            <h3 className="ui center aligned header" style={{ marginTop: 30 }}> Dodavanje ispitnog roka </h3>
            <div className="ui raised segment" style={{ width: 500, paddingLeft: 130 }}>
                <IspitniRokAddComponent />
            </div>
        </div>
    </div>
}

export default AdminPreferences;