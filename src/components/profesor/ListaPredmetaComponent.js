import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPredmetiForProfesor } from '../../store/actions';
import { currentlyLoggedSelector, predmetiSelector } from '../../store/selectors';
import PredmetListItem from './PredmetListItem';

const ListaPredmetaComponent = () => {

    const dispatch = useDispatch();
    const user = useSelector(currentlyLoggedSelector)
    const predmeti = useSelector(predmetiSelector)

    useEffect(() => {
        dispatch(GetPredmetiForProfesor(user.Username));    // eslint-disable-next-line
    },[])

    const renderedPredmeti = predmeti.map(predmet => {
        return <div key={predmet.Id} style={{ marginTop: 20 }}>
            <PredmetListItem predmet={predmet}/> 
        </div>
    })

    return <div style={{ marginTop: 50 }}>
        <h2 style={{ marginLeft: 200, marginBottom: 40 }}> Izbor predmeta: </h2>
        {renderedPredmeti}
    </div>
}

export default ListaPredmetaComponent;