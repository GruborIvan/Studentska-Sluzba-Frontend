import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GetStudentInfo } from '../../store/actions';
import { currentlyLoggedSelector, studentInfoSelector } from '../../store/selectors';
import Loader from '../Loader';

const StudentInfo = () => {

    const { push } = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(currentlyLoggedSelector);
    const student = useSelector(studentInfoSelector);

    useEffect(() => {
        dispatch(GetStudentInfo(user.Username));
    }, []);

    const renderedTokStudija = student === null ? <div></div> : student.TokStudija.map(tok => {
        return (
            <tr>
                <td> <p style={{ marginLeft: 30 }}> {tok.DatumUpisa.substring(0,10)} </p> </td>
                <td> {tok.Godina} </td>
                <td> {tok.BrojUpisa} </td>
                <td> {tok.Budzet === true ? "BUDŽET" : "SAMOFINANSIRANJE"} </td>
            </tr>
        )
    });

    return (
        student === null
            ?
            <Loader />
            :
            <div>

                <div style={{ position: 'fixed', left: 20, top: 170 }}>
                    <button className="ui inverted green button" onClick={() => push('/')}>
                        <i className="ui backward icon" />
                        Početna strana
                    </button>
                </div>

                <div className="ui padded raised container segment" style={{ marginLeft: 200, marginTop: 10 }}>

                    <div>
                        <h3 style={{ color: 'blue' }}> Podaci o studentu: </h3>
                        <hr />
                    </div>

                    <table className="ui celled table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td><b>Ime:</b></td>
                                <td><p style={{ width: 200 }}>{student.Ime}</p></td>
                            </tr>
                            <tr>
                                <td><b>Prezime:</b></td>
                                <td><p>{student.Prezime}</p></td>
                            </tr>
                            <tr>
                                <td><b>BrojIndeksa:</b></td>
                                <td>{student.BrojIndeksa}</td>
                            </tr>
                            <tr>
                                <td><b>Adresa stanovanja(stalno stanovanje)::</b></td>
                                <td>{student.Adresa.Ulica + "  " + student.Adresa.Broj}</td>
                            </tr>
                            <tr>
                                <td><b>Opština stanovanja za vreme studiranja:</b></td>
                                <td>{student.Adresa.Grad}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 style={{ color: 'blue' }}> Tok studija: </h3>

                    <table className="ui blue table">
                        <thead>
                            <th> Datum upisa godine: </th>
                            <th> Upisana godina: </th>
                            <th> Redni broj upisa date godine: </th>
                            <th> Način finansiranja: </th>
                        </thead>
                        <tbody>
                            {renderedTokStudija}
                        </tbody>
                    </table>

                </div>

            </div>)
}

export default StudentInfo;