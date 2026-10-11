
function History({ history }) {
  return (
    <section className="section">
      <p className="eyebrow">SUIVI</p>
      <h1>Historique des réservations</h1>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Référence</th>
              <th>Client</th>
              <th>Véhicule</th>
              <th>Période</th>
              <th>Total</th>
              <th>Statut</th>
            </tr>
          </thead>

          <tbody>
            {history.length === 0 ? (
              <tr>
                <td colSpan="6">Aucune réservation pour le moment.</td>
              </tr>
            ) : (
              history.map((item, index) => (
                <tr key={item.id || index}>
                  <td>{item.id || `#${1047 + index}`}</td>
                  <td>{item.client}</td>
                  <td>{item.car}</td>
                  <td>
                    {item.startDate} – {item.endDate}
                  </td>
                  <td>{item.total} DH</td>
                  <td>
                    <span className="status">
                      {item.status || "En cours"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default History;

