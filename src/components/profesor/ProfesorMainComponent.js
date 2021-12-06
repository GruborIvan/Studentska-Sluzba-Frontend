import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetIspitiZaOcenjivanje, GetIspitniRokovi } from '../../store/actions';
import { currentlyLoggedSelector, ispitniRokoviSelector, predmetiProfesorSelector } from '../../store/selectors';
import PasswordChangeComponent from '../PasswordChangeComponent';
import StudentiListComponent from './StudentiListComponent';

const ProfesorMainComponent = () => {

    const dispatch = useDispatch();

    const loggedInUser = useSelector(currentlyLoggedSelector);
    const predmeti = useSelector(predmetiProfesorSelector);
    const ispitniRokovi = useSelector(ispitniRokoviSelector);

    const [selection, setSelection] = useState(predmeti === null ? 1 : predmeti[0].Id);
    const [ispitniRok, setIspitniRok] = useState(2013)

    useEffect(() => {
        dispatch(GetIspitniRokovi());   // eslint-disable-next-line
        dispatch(GetIspitiZaOcenjivanje(loggedInUser.Username));    // eslint-disable-next-line
    }, [])

    const renderedIspitniRokCheckboxes = ispitniRokovi === null ? <div></div> : ispitniRokovi.map(rok => {
        return (<td key={rok.Id}>
            <div className="field" style={{ float: 'left', marginLeft: 20 }}>
                <div className="ui radio checkbox">
                    <input type="radio" name="frequency" checked={ispitniRok === rok.Id ? 'checked' : ''} onChange={() => setIspitniRok(rok.Id)} />
                    <label> {rok.NazivRoka} </label>
                </div>
            </div>
        </td>
        )
    })

    const predmetiRendered = predmeti === null ? <div></div> : predmeti.map(predmet => {
        return (<button key={predmet.Id} className={`ui green button item ${selection === predmet.Id ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(predmet.Id)}>
            {predmet.NazivPredmeta}
        </button>)
    })

    return <div>
        <div className="ui vertical pointing menu" style={{ width: 165, marginTop: 50, marginLeft: 50, float: 'left' }}>
            {predmetiRendered}
            <button className="ui green button item" style={{ width: '100%', height: 42 }}></button>

            <button className={`ui green button item ${selection === 100 ? 'active' : ''}`} style={{ width: '100%' }} onClick={() => setSelection(100)}>
                <i className="sun outline icon" />
                Podešavanja
            </button>
        </div>

        {selection === 100 ? <PasswordChangeComponent userType="Profesor" />
            :
            <div>
                <div className="ui form" style={{ marginLeft: 380, marginBottom: 15, marginTop: 40 }}>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                {renderedIspitniRokCheckboxes}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ marginLeft: 300, marginTop: 30 }}>
                    <StudentiListComponent predmetId={selection} ispitniRokId={ispitniRok} />
                </div>
            </div>
        }

    </div>
}

export default ProfesorMainComponent;