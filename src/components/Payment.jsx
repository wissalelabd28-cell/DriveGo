import { useState } from "react";

function Payment({ total }) {
  const [mode, setMode] = useState("Carte bancaire");
  const [success, setSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="section payment-section">
      <p className="eyebrow">PAIEMENT</p>
      <h1>Finaliser votre réservation</h1>

      <div className="payment-card">
        <form onSubmit={handlePayment}>
          <label>Mode de paiement</label>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option>Carte bancaire</option>
            <option>Espèces</option>
            <option>Virement bancaire</option>
          </select>

          {mode === "Carte bancaire" && (
            <>
              <label>Numéro de carte</label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
              />

              <div className="two-columns">
                <div>
                  <label>Date d'expiration</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                  />
                </div>

                <div>
                  <label>CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                  />
                </div>
              </div>
            </>
          )}

          <div className="payment-total">
            <span>Total à payer</span>
            <strong>{total} DH</strong>
          </div>

          <button className="main-button" type="submit">
            Confirmer le paiement
          </button>

          {success && (
            <div className="success-message">
              Paiement réussi ! Commande confirmée.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Payment;