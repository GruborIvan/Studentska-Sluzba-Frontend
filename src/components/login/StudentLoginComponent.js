import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { Login } from '../../store/actions/index'
import { useHistory } from 'react-router-dom';

const validationSheme = yup.object().shape({
    Password: yup.string().required("Morate uneti lozinku!"),
})

const StudentLoginComponent = () => {

    const dispatch = useDispatch();
    const { push } = useHistory();

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        const Username = values.PR + ' ' + values.BR + '/' + values.GOD;
        const payload = { Username: Username, Password: values.Password, IsStudent: true }
        const totalPayload = { data: payload, loginCallback: () => push('/')}
        dispatch(Login(totalPayload));   
    };

    return <div>
        <h2> Prijava studenta: </h2>
        <Formik onSubmit={onFormSubmit}
            validationSchema={validationSheme}
            initialValues={{ PR: '', BR: '', GOD: '', Password: '' }}>
            {({ resetForm }) =>
                <Form className="ui form">
                    <div className="field" style={{ overflow: "hidden", marginTop: 50 }}>
                        <label htmlFor="Username"> Broj indeksa: (npr. PR 111/2017) </label>

                        <div style={{ float: "left" }}>
                            <Field type="text" name="PR" placeholder="MK" style={{ width: 50, marginLeft: 10 }} />
                        </div>

                        <div style={{ float: "left" }}>
                            <Field type="text" name="BR" placeholder="xxx" style={{ width: 60, marginLeft: 10 }} />
                        </div>

                        <div style={{ float: "left" }}>
                            <Field type="text" name="GOD" placeholder="xxxx" style={{ width: 70, marginLeft: 10 }} />
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

export default StudentLoginComponent;