import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { predmetiSelector } from '../../store/selectors';

const PrijavljeniIspiti = () => {

    const [num,setNum] = useState(1)
    const predmeti = useSelector(predmetiSelector);

    useEffect(() => {
        setNum(num + 1);    // eslint-disable-next-line
    },[predmeti])

    const renderContent = predmeti === null ? <tr><td data-label="Sifra predmeta">Nema polozenih predmeta</td></tr> : predmeti.map(predmet => {
        return <tr key={predmet.Id}>
            <td data-label="Sifra predmeta">{predmet.SifraPredmeta}</td>
            <td data-label="Naziv Predmeta">{predmet.NazivPredmeta}</td>
            <td data-label="Ispitni rok">{predmet.NazivRoka}</td>
            <td data-label="Datum odrzavanja">{predmet.DatumIspita}</td>
            <td data-label="Profesor">{predmet.ImeProfesora}</td>
            <td data-label="Broj ESPB">{predmet.BrojESPB}</td>
        </tr>
    });

    return (<div>
        <h2 style={{ marginLeft: 480 }}> Prijavljeni ispiti </h2>
        <div className="ui very raised segment" style={{ width: 1200 }}>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Sifra predmeta</th>
                        <th>Naziv Predmeta</th>
                        <th>Ispitni rok</th> 
                        <th>Datum odrzavanja</th>
                        <th>Profesor</th>
                        <th>Broj ESPB</th>
                    </tr>
                </thead>
                <tbody>
                    {renderContent}
                </tbody>
            </table>
        </div>
    </div>);

}

export default PrijavljeniIspiti;