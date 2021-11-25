import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GetProfesorInfo } from '../../store/actions';
import { currentlyLoggedSelector, profesorInfoSelector } from '../../store/selectors';
import Loader from '../Loader';

const ProfesorInfo = () => {

    const user = useSelector(currentlyLoggedSelector);
    const profesor = useSelector(profesorInfoSelector);
    const dispatch = useDispatch();
    const { push } = useHistory();

    useEffect(() => {
        dispatch(GetProfesorInfo(user.Username));
    }, []);

    const getZvanje = (brZvanja) => {
        switch(brZvanja) {
            case 0 : return 'Docent';
            case 1: return 'Vanredni profesor'
            case 2: return 'Redovni profesor'
        }
    }

    const renderedZvanjaProfesora = profesor === null ? <div></div> : profesor.Zvanja.map(zvanje => {
        return <tr>
                <td> {zvanje.DatumDobijanjaZvanja.substring(0,10)} </td>
                <td> { getZvanje(zvanje.Zvanje)} </td>
            </tr>
        
    });

    return (
        profesor === null
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
                        <h3 style={{ color: 'blue' }}> Podaci o profesoru: </h3>
                        <hr />
                    </div>

                    <table className="ui celled table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td><b>Ime:</b></td>
                                <td><p style={{ width: 200 }}>{profesor.Ime}</p></td>
                            </tr>
                            <tr>
                                <td><b>Prezime:</b></td>
                                <td><p>{profesor.Prezime}</p></td>
                            </tr>
                            <tr>
                                <td><b>E-mail adresa:</b></td>
                                <td>{profesor.Email}</td>
                            </tr>
                            <tr>
                                <td><b>Citiranost:</b></td>
                                <td>{profesor.Citiranost}</td>
                            </tr>
                            <tr>
                                <td><b>Zvanje:</b></td>
                                <td>{profesor.Zvanje}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 style={{ color: 'blue' }}> Zvanja profesora: </h3>

                    <table className="ui blue table">
                        <thead>
                            <th> Datum ostvarivanja zvanja: </th>
                            <th> Zvanje: </th>
                        </thead>
                        <tbody>
                            {renderedZvanjaProfesora}
                        </tbody>
                    </table>

                </div>

            </div>
    );
}

export default ProfesorInfo;