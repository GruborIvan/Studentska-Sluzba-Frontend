import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetIspitniRokovi } from '../../store/actions';
import { ispitniRokoviSelector } from '../../store/selectors';

const IspitniRokList = () => {

    const ispitniRokovi = useSelector(ispitniRokoviSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetIspitniRokovi());   // eslint-disable-next-line
    },[])

    const ispitniRokoviRendered = ispitniRokovi === null ? <tr></tr> : ispitniRokovi.map(rok => {
        return <tr key={rok.Id}>
            <td data-label="Naziv roka">{rok.NazivRoka}</td>
            <td data-label="Datum pocetka ispitnog roka">
                <p style={{ marginLeft: 80 }}>
                {rok.DatumPocetkaRoka.substring(0,10)}
                </p>
            </td>
            <td data-label="Datum zavrsetka ispitnog roka">
                <p style={{ marginLeft: 80 }}>
                {rok.DatumKrajaRoka.substring(0,10)}
                </p>
            </td>
        </tr>
    })

    return (<div>
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>Naziv roka</th>
                    <th><p style={{ marginLeft: 30 }}> Datum pocetka ispitnog roka </p> </th>
                    <th><p style={{ marginLeft: 30 }}>Datum zavrsetka ispitnog roka </p> </th>
                </tr>
            </thead>
            <tbody>
                {ispitniRokoviRendered}
            </tbody>
        </table>

    </div>)

}

export default IspitniRokList;