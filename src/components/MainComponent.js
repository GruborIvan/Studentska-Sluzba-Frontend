import React, { useEffect } from 'react';
import { currentlyLoggedSelector } from '../store/selectors/index'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PredmetiComponent from './student/PredmetiComponent';
import ProfesorMainComponent from './profesor/ProfesorMainComponent';

const MainComponent = () => {

    const loggedInUser = useSelector(currentlyLoggedSelector);
    const { push } = useHistory();

    useEffect(() => {
        if (loggedInUser === null) {
            push('/login'); 
        }   // eslint-disable-next-line
    },[loggedInUser])

    const renderedContent = () => {
        if (loggedInUser !== null) {
            if (loggedInUser.Type === 'STUDENT') {
                return <PredmetiComponent/>
            }
            else {
                return <ProfesorMainComponent/>
            }
        }
        else {
            return <div></div>
        }
    }

    return (
        renderedContent()
    );
}

export default MainComponent;