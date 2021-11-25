import React, { useEffect } from 'react';
import { currentlyLoggedSelector } from '../store/selectors/index'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListaPredmetaComponent from './profesor/ListaPredmetaComponent';
import PredmetiComponent from './student/PredmetiComponent';

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
                return <ListaPredmetaComponent/>
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