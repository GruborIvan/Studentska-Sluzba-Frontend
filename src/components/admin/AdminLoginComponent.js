import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup'
import { useHistory } from 'react-router-dom';

const validationSheme = yup.object().shape({
    Username: yup.string().required("Username is required!"),
    Password: yup.string().required("Password is required!"),
})

const AdminLoginComponent = () => {

    const { push } = useHistory();

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        push('/admin')
    };

    return <div className="ui raised segment" style={{ width: 350, marginLeft: 290, marginTop: 30, backgroundColor: 'lightgrey' }}>
        <h3 style={{ marginLeft: 65 }}> Prijava administratora: </h3>

        <Formik onSubmit={onFormSubmit}
            validationSchema={validationSheme}
            initialValues={{ Username: '', Password: '' }}>

            <Form className="ui form">

                <div className="field" style={{ overflow: "hidden", marginTop: 30, marginLeft: 50 }}>
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

                <div className="field" style={{ overflow: "hidden", marginTop: 30, marginLeft: 50 }}>
                    <label htmlFor="Password"> Lozinka: </label>
                    <div style={{ float: "left" }}>
                        <Field type="password" name="Password" placeholder="Lozinka.." style={{ width: 200 }} />
                    </div>

                    <div style={{ float: "left", marginLeft: 35 }}>
                        <ErrorMessage name="Password">
                            {(msg) => <div style={{ color: "red", marginLeft: 10 }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

                <div style={{ overflow: 'hidden', marginTop: 30, marginLeft: 55 }}>
                    <button type="submit" className="ui green button" style={{ float: 'left', marginLeft: 40, marginRight: 40 }}> Potvrda </button>
                </div>
            </Form>
        </Formik>
    </div>
}

export default AdminLoginComponent;