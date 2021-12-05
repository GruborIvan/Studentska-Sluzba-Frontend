import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { Login } from '../../store/actions/index'
import { useHistory } from 'react-router-dom';

const validationSheme = yup.object().shape({
    Username: yup.string().required("Username is required!"),
    Password: yup.string().required("Password is required!"),
})

const ProfesorLoginComponent = () => {

    const dispatch = useDispatch();
    const { push } = useHistory();

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        let vals = values;
        vals.IsStudent = false;
        const payload = { data: vals, loginCallback: () => push('/')}
        dispatch(Login(payload))
    };

    return <div>
        <h2> Prijava profesora: </h2>
        <Formik onSubmit={onFormSubmit}
            validationSchema={validationSheme}
            initialValues={{ Username: '', Password: '' }}>

            {({ resetForm }) =>
                <Form className="ui form">

                    <div className="field" style={{ overflow: "hidden", marginTop: 50 }}>
                        <label htmlFor="Username"> E-mail adresa: </label>
                        <div style={{ float: "left" }}>
                            <Field type="text" name="Username" placeholder="E-mail adresa.." style={{ width: 200 }} />
                        </div>

                        <div style={{ float: "left", marginLeft: 35 }}>
                            <ErrorMessage name="Username">
                                {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{ overflow: "hidden", marginTop: 28 }}>
                        <label htmlFor="Password"> Lozinka: </label>
                        <div style={{ float: "left" }}>
                            <Field type="password" name="Password" placeholder="Lozinka.." style={{ width: 200, marginLeft: 10 }} />
                        </div>

                        <div style={{ float: "left", marginLeft: 35 }}>
                            <ErrorMessage name="Password">
                                {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div style={{ overflow: 'hidden', marginTop: 50, marginLeft: 55 }}>
                        <button type="submit" className="ui green button" style={{ float: 'left', marginLeft: 200, marginRight: 40 }}> Potvrda </button>
                        <button type="reset" className="ui red button" style={{ marginLeft: 50 }} onClick={() => resetForm()}> Ponisti </button>
                    </div>

                </Form>
            }
        </Formik>
    </div>
}

export default ProfesorLoginComponent;