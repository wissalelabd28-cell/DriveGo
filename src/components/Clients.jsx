function Clients({ clients = [] }) {
return ( <section className="section"> <p className="eyebrow">GESTION</p> <h1>Clients</h1>


  <div className="table-card">
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>CIN</th>
          <th>Téléphone</th>
          <th>Permis</th>
          <th>Statut</th>
        </tr>
      </thead>

      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.nom}</td>
            <td>{client.cin}</td>
            <td>{client.telephone}</td>
            <td>{client.permis}</td>
            <td>
              <span className="status">{client.statut}</span>
            </td>
          </tr>
        ))}

        {clients.length === 0 && (
          <tr>
            <td colSpan="5">
              Aucun client enregistré.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</section>


);
}

export default Clients;
