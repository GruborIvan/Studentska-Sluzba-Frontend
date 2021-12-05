import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostOcena } from '../../store/actions';

const BodoviInsertComponent = ({ student, predmetId, rokId }) => {

    const [predispitne,setPredispitne] = useState(0);
    const [ispitne,setIspitne] = useState(0);
    const dispatch = useDispatch();

    const ocenaField = useRef('3');

    useEffect(() => {
        setPredispitne(0);
        setIspitne(0);
    },[])

    useEffect(() => {
        ocenaField.current = getOcena();    // eslint-disable-next-line
    },[predispitne,ispitne])

    const onFormSubmit = () => {
        const sendPayload = { StudentId: student.Id, PredmetId: predmetId, RokId: rokId, PredispitniPoeni: predispitne, IspitniPoeni: ispitne }
        dispatch(PostOcena(sendPayload));
        setPredispitne(0);
        setIspitne(0);
    }

    const getOcena = () => {
        let po = parseInt(predispitne);
        let io = parseInt(ispitne);
        if (isNaN(po) || isNaN(io))
            return '';
        let bodovi = po + io;
        console.log(bodovi)
        if (bodovi < 51)
            return '';
        else if (bodovi < 61)
            return 6;
        else if (bodovi < 71)
            return 7;
        else if (bodovi < 81)
            return 8;
        else if (bodovi < 91)
            return 9;
        else 
            return 10;
    }

    return student === null ? <div style={{ marginLeft: 70 }}> Odaberite studenta za unos ocene </div> : <div>
        <h3 style={{ marginLeft: 70 }}> Upis bodova za studenta </h3>

        <div style={{ marginTop: 20 }}>

            <form className="ui form" style={{ marginTop: 15 }}>
                <table className="ui blue table">

                    <thead></thead>
                    <tbody>
                        <tr>
                            <td> <b>Ime: </b> </td>
                            <td> {student.Ime} </td>
                        </tr>
                        <tr>
                            <td><b>Prezime: </b></td>
                            <td>{student.Prezime}</td>
                        </tr>
                        <tr>
                            <td><b>Broj Indeksa: </b></td>
                            <td>{student.BrojIndeksa}</td>
                        </tr>
                        <tr>
                            <td><b>Predispitne obaveze:</b></td>
                            <td>
                                <input type="number" name="predispitne" id="predispitne" placeholder="Bodovi..." 
                                    style={{ width: 100, marginTop: 10 }} 
                                    value={predispitne}
                                    onChange={(e) => setPredispitne(e.target.value)}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td><b>Ispitne obaveze:</b></td>
                            <td>
                                <input type="number" name="predispitne" id="predispitne" placeholder="Bodovi..." 
                                    style={{ width: 100, marginTop: 10 }} 
                                    value={ispitne}
                                    onChange={(e) => setIspitne(e.target.value)}
                                    />
                            </td>
                        </tr>
                        <tr>
                            <td><b>Ocena:</b></td>
                            <td>
                                <p> {getOcena()} </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button className="ui green button" type="button" style={{ marginLeft: 100, width: 150 }} onClick={() => onFormSubmit()}> 
                    <i className="ui check icon"></i>
                    Potvrdi ocenu 
                </button>

            </form>
        </div>
    </div>
}

export default BodoviInsertComponent;