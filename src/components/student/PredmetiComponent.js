import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPredmetiStudent } from '../../store/actions';
import { currentlyLoggedSelector, predmetiStudentSelector } from '../../store/selectors';
import NepolozeniPredmeti from './NepolozeniPredmeti';
import PolozeniPredmeti from './PolozeniPredmeti';

const PredmetiComponent = () => {

    const [selection, setSelection] = useState(1);
    const dispatch = useDispatch();
    const loggedInUser = useSelector(currentlyLoggedSelector);
    const predmeti = useSelector(predmetiStudentSelector);

    useEffect(() => {
        dispatch(GetPredmetiStudent({ brIndeksa: loggedInUser.Username, mode: selection }))
    },[selection])

    const renderPredmetiContent = () => {
        switch(selection) {
            case 1 : return <NepolozeniPredmeti/>
            case 2 : return <PolozeniPredmeti/>
            default : return <div> NEPOLOZENI </div>
        }
    }

    console.log(predmeti)

    return (<div style={{ overflow: 'hidden' }}>

        <div className="ui vertical pointing menu" style={{ width: 165, marginTop: 50, marginLeft: 15, float: 'left' }}>
            <button className={`ui green button item ${selection === 1 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(1)}>
                All Notifications
            </button>

            <button className={`ui green button item ${selection === 2 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(2)}>
                Unread Notifications
            </button>

            <button className={`ui green button item ${selection === 3 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(3)}>
                Errors
                <i className="x icon" style={{ color: 'red' }}></i>
            </button>

        </div>

        <div style={{ marginTop: 50, marginLeft: 280 }}>
            {renderPredmetiContent()}
        </div>

    </div>)
}

export default PredmetiComponent;