import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPredmetiStudent, GetPrijavljeniIspiti, PrijavaIspita } from '../../store/actions';
import { currentlyLoggedSelector, predmetiStudentSelector } from '../../store/selectors';
import PasswordChangeComponent from '../PasswordChangeComponent';
import NepolozeniPredmeti from './NepolozeniPredmeti';
import PolozeniPredmeti from './PolozeniPredmeti';
import PrijavljeniIspiti from './PrijavljeniIspiti';

const PredmetiComponent = () => {

    const [selection, setSelection] = useState(1);
    const [selectedIspitniRok,setSelectedIspitniRok] = useState(2013)
    const dispatch = useDispatch();
    const loggedInUser = useSelector(currentlyLoggedSelector);
    const predmeti = useSelector(predmetiStudentSelector);

    useEffect(() => {
        if (selection === 3) {
            dispatch(GetPrijavljeniIspiti(loggedInUser.Username));
        }
        else {
            dispatch(GetPredmetiStudent({ brIndeksa: loggedInUser.Username, mode: selection,ispitniRok: selectedIspitniRok }))
        }   // eslint-disable-next-line
    },[selection,selectedIspitniRok])

    const prijavaIspita = (ispitId) => {
        dispatch(PrijavaIspita({ BrojIndeksa: loggedInUser.Username, IspitId: ispitId, IspitniRokId: selectedIspitniRok }));
        dispatch(GetPredmetiStudent({ brIndeksa: loggedInUser.Username, mode: selection,ispitniRok: selectedIspitniRok }));
    }

    const renderPredmetiContent = () => {
        switch(selection) {
            case 1 : return <NepolozeniPredmeti predmeti={predmeti} setIspitniRok={setSelectedIspitniRok} ispitniRok={selectedIspitniRok} prijavaIspita={prijavaIspita}/>
            case 2 : return <PolozeniPredmeti predmeti={predmeti}/>
            case 3 : return <PrijavljeniIspiti />
            case 4 : return <PasswordChangeComponent userType="Student" />
            default : return <div> NOT IMPLEMENTED </div>
        }
    }

    return (<div style={{ overflow: 'hidden' }}>

        <div className="ui vertical pointing menu" style={{ width: 165, marginTop: 50, marginLeft: 50, float: 'left' }}>
            <button className={`ui green button item ${selection === 1 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(1)}>
                Nepolozeni predmeti
            </button>

            <button className={`ui green button item ${selection === 2 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(2)}>
                Polozeni predmeti
            </button>

            <button className={`ui green button item ${selection === 3 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(3)}>
                Prijavljeni ispiti
            </button>

            <button className="ui green button item" style={{ width: '100%', height: 42 }}></button>

            <button className={`ui green button item ${selection === 4 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(4)}>
                <i className="sun outline icon"/>
                Podešavanja
            </button>

        </div>

        <div style={{ marginTop: 30, marginLeft: 260 }}>
            {renderPredmetiContent()}
        </div>

    </div>)
}

export default PredmetiComponent;