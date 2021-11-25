import React from 'react';

const PredmetListItem = ({ predmet }) => {
    return <div className="ui blue raised container segment" style={{ height: 60 }}>
        {predmet.NazivPredmeta}
    </div>
}

export default PredmetListItem;