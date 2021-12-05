import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { AddIspitniRok } from '../../store/actions';

const validationSheme = yup.object().shape({
    NazivRoka: yup.string().required("Required"),
    DatumPocetkaRoka: yup.date().required("Required"),
    DatumKrajaRoka: yup.date().required("Required"),
})

const IspitniRokAddComponent = () => {

    const dispatch = useDispatch();

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        dispatch(AddIspitniRok(values));
    };

    return <div>
        <Formik onSubmit={onFormSubmit}
            validationSchema={validationSheme}
            initialValues={{ NazivRoka: '', DatumPocetkaRoka: '', DatumKrajaRoka: '' }}>

            <Form className="ui form">

                <div className="field" style={{ overflow: "hidden", marginTop: 20 }}>
                    <label htmlFor="NazivRoka"> Naziv ispitnog roka: </label>
                    <div style={{ float: "left" }}>
                        <Field type="text" name="NazivRoka" placeholder="Naziv ispitnog roka.." style={{ width: 200 }} />
                    </div>

                    <div style={{ float: "left", marginLeft: 35 }}>
                        <ErrorMessage name="NazivRoka">
                            {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

                <div className="field" style={{ overflow: "hidden", marginTop: 40 }}>
                    <label htmlFor="DatumPocetkaRoka"> Datum pocetka ispitnog roka: </label>
                    <div style={{ float: "left" }}>
                        <Field type="date" name="DatumPocetkaRoka" placeholder="Datum pocetka roka.." style={{ width: 200 }} />
                    </div>

                    <div style={{ float: "left", marginLeft: 35 }}>
                        <ErrorMessage name="DatumPocetkaRoka">
                            {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

                <div className="field" style={{ overflow: "hidden", marginTop: 40 }}>
                    <label htmlFor="DatumKrajaRoka"> Datum kraja ispitnog roka: </label>
                    <div style={{ float: "left" }}>
                        <Field type="date" name="DatumKrajaRoka" placeholder="Datum kraja roka.." style={{ width: 200 }} />
                    </div>

                    <div style={{ float: "left", marginLeft: 35 }}>
                        <ErrorMessage name="DatumKrajaRoka">
                            {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

                <button className="ui primary button" style={{ marginTop: 25, marginBottom: 20 }}> Dodavanje ispitnog roka </button>

            </Form>
        </Formik>
    </div>
}

export default IspitniRokAddComponent;