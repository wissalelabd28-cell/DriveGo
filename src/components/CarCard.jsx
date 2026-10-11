function CarCard({ car, onReserve }) {
  return (
    <div className="car-card">
      <div className="car-image">
        <img src={car.image} alt={car.name} />
      </div>

      <div className="car-content">
        <div className="car-title">
          <h3>{car.name}</h3>
          <span>{car.category}</span>
        </div>

        <div className="car-details">
          <p>{car.gearbox}</p>
          <p>{car.fuel}</p>
          <p>{car.seats} places</p>
        </div>

        <div className="availability">
          <span className={car.available ? "available" : "unavailable"}>
            {car.available ? "Disponible" : "Indisponible"}
          </span>
        </div>

        <div className="car-bottom">
          <div>
            <strong>{car.price} DH</strong>
            <small>/ jour</small>
          </div>

          <button
            onClick={() => onReserve(car)}
            disabled={!car.available}
          >
            {car.available ? "Réserver" : "Indisponible"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;