import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetIspitiZaOcenjivanje } from '../../store/actions';
import { currentlyLoggedSelector, predmetiProfesorSelector } from '../../store/selectors';
import StudentiListComponent from './StudentiListComponent';

const ProfesorMainComponent = () => {

    const dispatch = useDispatch();
    const loggedInUser = useSelector(currentlyLoggedSelector);
    const predmeti = useSelector(predmetiProfesorSelector);
    const [selection, setSelection] = useState(predmeti === null ? 1 : predmeti[0].Id);
    const [ispitniRok,setIspitniRok] = useState(1002)

    useEffect(() => {
        dispatch(GetIspitiZaOcenjivanje(loggedInUser.Username));    // eslint-disable-next-line
    },[])

    const predmetiRendered = predmeti === null ? <div></div> : predmeti.map(predmet => {
        return (<button key={predmet.Id} className={`ui green button item ${selection === predmet.Id ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(predmet.Id)}>
            {predmet.NazivPredmeta}
        </button>)
    })

    return <div>
        <div className="ui vertical pointing menu" style={{ width: 165, marginTop: 50, marginLeft: 50, float: 'left' }}>
            {predmetiRendered}
        </div>

        <div className="ui form" style={{ marginLeft: 380, marginBottom: 15, marginTop: 40 }}>
                <div className="inline fields">
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="frequency" checked={ispitniRok === 1002 ? 'checked' : ''} onChange={() => setIspitniRok(1002)}/>
                            <label>Januarski ispitni rok</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="frequency" checked={ispitniRok === 1003 ? 'checked' : ''} onChange={() => setIspitniRok(1003)}/>
                            <label>Februarski ispitni rok</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="frequency" checked={ispitniRok === 1004 ? 'checked' : ''} onChange={() => setIspitniRok(1004)}/>
                            <label>Aprilski ispitni rok</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="frequency" checked={ispitniRok === 1005 ? 'checked' : ''} onChange={() => setIspitniRok(1005)}/>
                            <label>Junski</label>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginLeft: 300, marginTop: 30 }}>
                <StudentiListComponent predmetId={selection} ispitniRokId={ispitniRok}/>
            </div>

    </div>
}  

export default ProfesorMainComponent;