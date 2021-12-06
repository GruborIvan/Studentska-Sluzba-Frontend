import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetStudentiZaOcenjivanje, MakePDF } from '../../store/actions';
import { studentiZaOcenjivanjeSelector } from '../../store/selectors';
import BodoviInsertComponent from './BodoviInsertComponent';

const StudentiListComponent = ({ predmetId, ispitniRokId }) => {

    const dispatch = useDispatch();
    const studenti = useSelector(studentiZaOcenjivanjeSelector);
    const [currentStudent,setCurrentStudent] = useState(null);

    useEffect(() => {
        dispatch(GetStudentiZaOcenjivanje({ PredmetId: predmetId, RokId: ispitniRokId }));
        setCurrentStudent(null);    // eslint-disable-next-line
    }, [predmetId, ispitniRokId])

    const renderedStudents = studenti === null ? <tr></tr> : studenti.map(student => {
        return <tr key={student.Id}>
            <td>{student.Ime}</td>
            <td>{student.Prezime}</td>
            <td>{student.BrojIndeksa}</td>
            <td style={{ width: 140 }}>
                <div style={{ width: 140, marginLeft: 10 }}>
                    <button className="ui mini orange button" style={{ width: 124.7 }}
                        onClick={() => setCurrentStudent(student)}>
                        Unos bodova
                        <i className="edit outline icon" style={{ marginLeft: 10 }}></i>
                    </button>
                </div>
            </td>
        </tr>
    });

    return <div style={{ overflow: 'hidden' }}>
        <div className="ui padded raised segment" style={{ width: 750, float: 'left' }}>
            <div style={{ overflow: 'hidden' }}>
                <h4 style={{ marginTop: 10, marginLeft: 170, float: 'left' }}> Studenti koji su prijavili ispit u naznačenom roku </h4>
                <button className="ui mini orange button" style={{ marginLeft: 40, marginTop: 8 }}
                    onClick={() => dispatch(MakePDF({predmetId: predmetId, ispitniRokId: ispitniRokId}))}>
                    <i className="ui file icon"></i>
                    Generisanje PDF-a
                </button>
            </div>

            <table className="ui celled table" style={{ width: 600, marginTop: 30, marginLeft: 50 }}>
                <thead>
                    <tr>
                        <th>Ime studenta:</th>
                        <th>Prezime studenta:</th>
                        <th>Broj indeksa:</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {renderedStudents}
                </tbody>
            </table>
        </div>

        <div className="ui very raised segment" style={{ width: 390, marginLeft: 795 }}>
            <BodoviInsertComponent student={currentStudent} predmetId={predmetId} rokId={ispitniRokId} />
        </div>
    </div>
}

export default StudentiListComponent;