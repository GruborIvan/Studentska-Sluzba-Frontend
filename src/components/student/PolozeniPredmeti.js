import React from "react";

const PolozeniPredmeti = ({ predmeti }) => {

    const brojESPB = () => {
        let sum = 0;
        predmeti.forEach(predm => {
            sum += predm.BrojESPB;
        });
        return sum;
    }

    const prosek = () => {
        if (predmeti.Rezultati != null) {
            if (predmeti.length === 0) {
                return 0;
            }
            let prosek = 0;
            for (let i = 0; i < predmeti.length; i++) {
                prosek += parseInt(predmeti[i].Rezultati.Ocena);
            }
            console.log(prosek)
            return prosek / predmeti.length * 100;
        }
        return "";
    }

    const renderContent = predmeti === null ? <tr><td data-label="Sifra predmeta">Nema polozenih predmeta</td></tr> : predmeti.map(predmet => {
        return <tr key={predmet.Id}>
            <td data-label="Sifra predmeta">{predmet.SifraPredmeta}</td>
            <td data-label="Naziv Predmeta">{predmet.NazivPredmeta}</td>
            <td data-label="Profesor">{predmet.ImeProfesora}</td>
            <td data-label="Broj ESPB">{predmet.BrojESPB}</td>
            <td data-label="Ocena">{predmet.Ocena}</td>
        </tr>
    });

    return <div>
        <h2 style={{ marginLeft: 480 }}> Polozeni ispiti </h2>
        <div className="ui very raised segment" style={{ width: 1200, marginBottom: 30 }}>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Sifra predmeta</th>
                        <th>Naziv Predmeta</th>
                        <th>Profesor</th>
                        <th>Broj ESPB</th>
                        <th> Ocena </th>
                    </tr>
                </thead>
                <tbody>
                    {renderContent}
                </tbody>
            </table>
        </div>

        
        <h5 style={{ float: 'left', marginLeft: 40 }}> Broj ESPB: {brojESPB()} </h5>
        <h5 style={{ float: 'left', marginLeft: 900 }}> Prosek: {prosek()} </h5>
    </div>
}

export default PolozeniPredmeti;