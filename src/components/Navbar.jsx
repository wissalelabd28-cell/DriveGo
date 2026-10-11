function Navbar({ page, setPage }) {
  return (
    <nav className="navbar">
      <div className="logo">Drive<span>Go</span></div>

      <div className="nav-links">
        <button className={page === "cars" ? "active" : ""} onClick={() => setPage("cars")}>
          Voitures
        </button>

        <button className={page === "reservation" ? "active" : ""} onClick={() => setPage("reservation")}>
          Réservation
        </button>

        <button className={page === "clients" ? "active" : ""} onClick={() => setPage("clients")}>
          Clients
        </button>

        <button className={page === "vehicles" ? "active" : ""} onClick={() => setPage("vehicles")}>
          Véhicules
        </button>

        <button className={page === "payment" ? "active" : ""} onClick={() => setPage("payment")}>
          Paiement
        </button>

        <button className={page === "history" ? "active" : ""} onClick={() => setPage("history")}>
          Historique
        </button>
      </div>
    </nav>
  );
}

export default Navbar;