import { useState } from "react";
import CarCard from "./CarCard";

function Cars({ cars, onReserve }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [gearbox, setGearbox] = useState("Toutes");

  const filteredCars = cars.filter((car) => {
    const matchSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Toutes" || car.category === category;

    const matchGearbox =
      gearbox === "Toutes" || car.gearbox === gearbox;

    return matchSearch && matchCategory && matchGearbox;
  });

  return (
    <section className="section">
      <div className="section-header">
        <div>
          <p className="eyebrow">NOTRE FLOTTE</p>
          <h1>Choisissez votre voiture</h1>
          <p>Des véhicules fiables et élégants pour tous vos déplacements.</p>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Rechercher une voiture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Toutes</option>
          <option>Économique</option>
          <option>SUV</option>
          <option>Berline</option>
          <option>Luxe</option>
        </select>

        <select
          value={gearbox}
          onChange={(e) => setGearbox(e.target.value)}
        >
          <option>Toutes</option>
          <option>Manuelle</option>
          <option>Automatique</option>
        </select>
      </div>

      <div className="cars-grid">
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onReserve={onReserve}
          />
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="empty">
          Aucune voiture trouvée.
        </div>
      )}
    </section>
  );
}

export default Cars;