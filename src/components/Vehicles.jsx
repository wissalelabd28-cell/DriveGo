function Vehicles({ cars }) {
  const available = cars.filter((car) => car.available).length;

  return (
    <section className="section">
      <p className="eyebrow">FLOTTE</p>
      <h1>Gestion des véhicules</h1>

      <div className="kpi-grid">
        <div className="kpi">
          <span>Total véhicules</span>
          <strong>{cars.length}</strong>
        </div>

        <div className="kpi">
          <span>Disponibles</span>
          <strong>{available}</strong>
        </div>

        <div className="kpi">
          <span>Indisponibles</span>
          <strong>{cars.length - available}</strong>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Véhicule</th>
              <th>Catégorie</th>
              <th>Boîte</th>
              <th>Carburant</th>
              <th>Prix / jour</th>
              <th>Disponibilité</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.category}</td>
                <td>{car.gearbox}</td>
                <td>{car.fuel}</td>
                <td>{car.price} DH</td>
                <td>
                  <span
                    className={
                      car.available
                        ? "available"
                        : "unavailable"
                    }
                  >
                    {car.available
                      ? "Disponible"
                      : "Indisponible"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Vehicles;