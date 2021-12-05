import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GetIspitniRokovi, OdjavaIspita } from "../../store/actions";
import { currentlyLoggedSelector, ispitniRokoviSelector } from '../../store/selectors';

const NepolozeniPredmeti = ({ predmeti, setIspitniRok, ispitniRok, prijavaIspita }) => {

    const ispitniRokovi = useSelector(ispitniRokoviSelector);
    const user = useSelector(currentlyLoggedSelector);
    const dispatch = useDispatch();

    const odjavaIspita = (predmetId) => {
        const sendData = { BrojIndeksa: user.Username, PredmetId: predmetId, IspitniRokId: ispitniRok };
        dispatch(OdjavaIspita(sendData));
    }

    useEffect(() => {
        dispatch(GetIspitniRokovi());   // eslint-disable-next-line
    }, [])

    useEffect(() => {

    }, [ispitniRokovi])

    const renderContent = predmeti === null ? <tr></tr> : predmeti.map(predmet => {
        return <tr key={predmet.Id}>
            <td data-label="Sifra predmeta">{predmet.SifraPredmeta}</td>
            <td data-label="Naziv Predmeta">{predmet.NazivPredmeta}</td>
            <td data-label="Datum odrzavanja"> <p style={{ marginLeft: 30 }}> {predmet.DatumIspita} </p></td>
            <td data-label="Profesor"> <p style={{ marginLeft: 30 }}>{predmet.ImeProfesora}</p></td>
            <td data-label="Broj ESPB"> <p style={{ marginLeft: 30 }}> {predmet.BrojESPB}</p></td>
            <td data-label="Cena Prijave Ispita"><p style={{ marginLeft: 40 }}> 200,00 din </p></td>
            <td data-label="">
                {
                    predmet.Rezultati === null || predmet.Rezultati === undefined
                        ?
                        <button className="ui small primary button" style={{ marginLeft: 10 }} onClick={() => window.confirm("Da li ste sigurni da želite da prijavite ovaj ispit?") && prijavaIspita(predmet.Id)}> Prijavi ispit </button>
                        :
                        <button className="ui small red button" style={{ marginLeft: 10 }} onClick={() => window.confirm("Da li ste sigurni da želite da odjavite ovaj ispit?") && odjavaIspita(predmet.Id)}> Odjavi ispit </button>
                }
            </td>
        </tr>
    });

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

    return <div>
        <h2 style={{ marginLeft: 480 }}> Prijava ispita </h2>
        <div className="ui very raised segment" style={{ width: 1200 }}>
            <div className="ui form" style={{ marginLeft: 150, marginBottom: 15, marginTop: 5 }}>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            {renderedIspitniRokCheckboxes}
                        </tr>
                    </tbody>
                </table>
            </div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Sifra predmeta</th>
                        <th>Naziv Predmeta</th>
                        <th>Datum odrzavanja</th>
                        <th>Profesor</th>
                        <th>Broj ESPB</th>
                        <th>Cena prijave ispita</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderContent}
                </tbody>
            </table>
        </div>
    </div>
}

export default NepolozeniPredmeti;