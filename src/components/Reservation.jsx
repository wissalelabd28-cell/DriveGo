
import { useState } from "react";

function Reservation({ cars, selectedCar, setSelectedCar, onPayment }) {
  const [client, setClient] = useState("");
  const [telephone, setTelephone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [option, setOption] = useState("Aucune");

  const options = {
    Aucune: 0,
    GPS: 50,
    "Siège bébé": 80,
    "Conducteur supplémentaire": 100,
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;

    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);

    return Math.max(
      0,
      Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    );
  };

  const days = calculateDays();

  const total =
    selectedCar && days > 0
      ? selectedCar.price * days + options[option]
      : 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !client.trim() ||
      !telephone.trim() ||
      !startDate ||
      !endDate ||
      !selectedCar
    ) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (!/^[0-9]{10}$/.test(telephone.trim())) {
      alert("Le numéro de téléphone doit contenir exactement 10 chiffres.");
      return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
      alert("La date de retour doit être après la date de départ.");
      return;
    }

    if (days <= 0) {
      alert("La durée de réservation est invalide.");
      return;
    }

    if (!selectedCar.available) {
      alert("Cette voiture n'est pas disponible.");
      return;
    }

    const reservation = {
      id: Date.now(),
      client: client.trim(),
      telephone: telephone.trim(),
      car: selectedCar.name,
      carId: selectedCar.id,
      startDate,
      endDate,
      days,
      option,
      total,
      status: "En cours",
    };

    onPayment(reservation);
  };

  return (
    <section className="section">
      <div className="section-header">
        <p className="eyebrow">RÉSERVATION</p>
        <h1>Réservez votre voiture</h1>
      </div>

      <div className="reservation-layout">
        <form className="form-card" onSubmit={handleSubmit}>
          <label>Voiture</label>

          <select
            value={selectedCar ? selectedCar.id : ""}
            onChange={(e) => {
              const car = cars.find(
                (c) => c.id === Number(e.target.value)
              );

              setSelectedCar(car || null);
            }}
            required
          >
            <option value="">Choisir une voiture</option>

            {cars
              .filter((car) => car.available)
              .map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name} - {car.price} DH / jour
                </option>
              ))}
          </select>

          <label>Nom du client</label>

          <input
            type="text"
            placeholder="Ex : Salma Bennani"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            required
          />

          <label>Numéro de téléphone</label>

          <input
            type="tel"
            placeholder="Ex : 0612345678"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            pattern="[0-9]{10}"
            maxLength={10}
            inputMode="numeric"
            title="Le numéro doit contenir exactement 10 chiffres."
            required
          />

          <label>Date de départ</label>

          <input
            type="date"
            value={startDate}
            min={new Date().toLocaleDateString("en-CA")}
            onChange={(e) => {
              setStartDate(e.target.value);

              if (endDate && e.target.value >= endDate) {
                setEndDate("");
              }
            }}
            required
          />

          <label>Date de retour</label>

          <input
            type="date"
            value={endDate}
            min={startDate || new Date().toLocaleDateString("en-CA")}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />

          <label>Options</label>

          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="Aucune">Aucune</option>
            <option value="GPS">GPS</option>
            <option value="Siège bébé">Siège bébé</option>
            <option value="Conducteur supplémentaire">
              Conducteur supplémentaire
            </option>
          </select>

          <button className="main-button" type="submit">
            Continuer vers le paiement
          </button>
        </form>

        <div className="summary-card">
          <p className="eyebrow">RÉSUMÉ</p>

          <h2>
            {selectedCar ? selectedCar.name : "Aucune voiture"}
          </h2>

          <div className="summary-line">
            <span>Client</span>
            <strong>{client || "Non renseigné"}</strong>
          </div>

          <div className="summary-line">
            <span>Téléphone</span>
            <strong>{telephone || "Non renseigné"}</strong>
          </div>

          <div className="summary-line">
            <span>Prix / jour</span>
            <strong>{selectedCar ? selectedCar.price : 0} DH</strong>
          </div>

          <div className="summary-line">
            <span>Nombre de jours</span>
            <strong>{days}</strong>
          </div>

          <div className="summary-line">
            <span>Option</span>
            <strong>{options[option]} DH</strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>{total} DH</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;

