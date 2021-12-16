import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { currentlyLoggedSelector } from '../store/selectors';
import { ChangePassword } from '../store/actions';

const validationSheme = yup.object().shape({
    OldPassword: yup.string().required('Required'),
    NewPassword: yup.string().required('Required'),
    ConfirmPassword: yup.string().required('Required'),
})

const PasswordChangeComponent = ({ userType }) => {

    const dispatch = useDispatch();
    const user = useSelector(currentlyLoggedSelector);

    const onPasswordChange = (values,{resetForm}) => {
        resetForm();
        if (values.NewPassword !== values.ConfirmPassword) {
            alert('Passwords dont match!')
            return;
        }
        const sendData = { OsobaId: user.Username, OsobaType: userType, Password: values.NewPassword }
        console.log(sendData);
        dispatch(ChangePassword(sendData));
    }

    return <div className="ui raised green segment" style={{ width: 500, marginLeft: 300, marginTop: 40, float: 'left' }}>
        <h3 style={{ marginLeft: 100 }}> Promena lozinke za korisnika: </h3>

        <Formik
            onSubmit={onPasswordChange}
            initialValues={{ OldPassword: '', NewPassword: '', ConfirmPassword: '' }}
            validationSchema={validationSheme}>

            <Form>
                <div style={{ marginTop: 50, marginLeft: 30 }}>
                    <label htmlFor="OldPassword"> Trenutna lozinka: </label>
                    <div className="ui small input focus" style={{ marginLeft: 40 }}>
                        <Field type="password" name="OldPassword" placeholder="Trenutna lozinka..." style={{ width: 250 }} />
                    </div>
                    <ErrorMessage name="OldPassword">
                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                    </ErrorMessage>
                </div>
                <br />

                <div style={{ marginLeft: 30, marginTop: 15 }}>
                    <label htmlFor="NewPassword"> Nova lozinka: </label>
                    <div className="ui small input focus" style={{ marginLeft: 63 }}>
                        <Field type="password" name="NewPassword" placeholder="Nova lozinka..." style={{ width: 250 }} />
                    </div>
                    <ErrorMessage name="NewPassword">
                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                    </ErrorMessage>
                </div>
                <br />

                <div style={{ marginLeft: 30, marginTop: 15 }}>
                    <label htmlFor="ConfirmPassword"> Potvrda nove lozinke: </label>
                    <div className="ui small input focus" style={{ marginLeft: 12 }}>
                        <Field type="password" name="ConfirmPassword" placeholder="Confirm password..." style={{ width: 250 }} />
                    </div>
                    <ErrorMessage name="ConfirmPassword">
                        {(msg) => <div style={{ color: "red", marginLeft: 80 }}> {msg} </div>}
                    </ErrorMessage>
                </div>

                <button type="submit" className="ui small primary button" style={{ marginLeft: 130, marginTop: 50 }}>
                    <i className="ui file icon" style={{ marginRight: 15 }}/> 
                    Potvrda promene lozinke 
                </button>
            </Form>

        </Formik>
    </div>
}

export default PasswordChangeComponent;