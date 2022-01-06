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
        if (predmeti.length === 0) {
            return 0;
        }
        let prosek = 0;
        for (let i = 0; i < predmeti.length; i++) {
            prosek += parseInt(predmeti[i].Ocena);
        }
        let prosek100 = prosek / predmeti.length * 100 + '';
        return [prosek100.slice(0, 1), '.', prosek100.slice(1, 3)].join('')
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

        <div style={{ overflow: 'hidden' }}>
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5 style={{ float: 'left', marginLeft: 40 }}> Ukupan broj ESPB:</h5>
                            </td>
                            <td>
                                <h5 style={{ float: 'left', marginLeft: 14 }}> {brojESPB()} </h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5 style={{ float: 'left', marginLeft: 900 }}> Prosek:</h5>
                            </td>
                            <td>
                                <h5 style={{ float: 'left', marginLeft: 30 }}> {prosek()} </h5>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default PolozeniPredmeti;