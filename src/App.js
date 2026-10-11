import { useState } from "react";

import Navbar from "./components/Navbar";
import Cars from "./components/Cars";
import Reservation from "./components/Reservation";
import Clients from "./components/Clients";
import Vehicles from "./components/Vehicles";
import Payment from "./components/Payment";
import History from "./components/History";

import "./App.css";

function App() {
const [page, setPage] = useState("cars");
const [selectedCar, setSelectedCar] = useState(null);
const [total, setTotal] = useState(0);
const [history, setHistory] = useState([]);

const [clients, setClients] = useState([
{
id: 1,
nom: "Youssef El Amrani",
cin: "BE123456",
telephone: "06 61 23 45 67",
permis: "Valide",
statut: "VIP"
},
{
id: 2,
nom: "Salma Bennani",
cin: "BK778899",
telephone: "06 70 11 22 33",
permis: "Valide",
statut: "Actif"
},
{
id: 3,
nom: "Karim Alaoui",
cin: "CD445566",
telephone: "07 12 34 56 78",
permis: "Expire bientôt",
statut: "Actif"
},
{
id: 4,
nom: "Nadia Tazi",
cin: "JA990011",
telephone: "06 55 66 77 88",
permis: "Valide",
statut: "VIP"
},
{
id: 5,
nom: "Omar Fassi",
cin: "EE334455",
telephone: "06 44 33 22 11",
permis: "Expiré",
statut: "Bloqué"
}
]);

const cars = [
{
id: 6,
name: "Dacia Logan",
category: "Économique",
gearbox: "Manuelle",
fuel: "Diesel",
seats: 5,
price: 250,
available: true,
image: "https://autotijd.be/images/dacia/2016/logan/facelift/dacia-logan-2016-01.jpg"
},
{
id: 7,
name: "Renault Clio 5",
category: "Économique",
gearbox: "Manuelle",
fuel: "Essence",
seats: 5,
price: 300,
available: true,
image: "https://tse4.mm.bing.net/th/id/OIP.XJPcwo6teNBWnUcD3BfnqAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
id: 8,
name: "Peugeot 208",
category: "Économique",
gearbox: "Automatique",
fuel: "Essence",
seats: 5,
price: 350,
available: false,
image: "https://tse3.mm.bing.net/th/id/OIP.mda31gnsYcny8lBjIYpmYQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
id: 9,
name: "Hyundai Tucson",
category: "SUV",
gearbox: "Automatique",
fuel: "Diesel",
seats: 5,
price: 600,
available: true,
image: "https://www.thecarexpert.co.uk/wp-content/uploads/2023/07/Hyundai-Tucson-test-drive-front-action-1200x800.jpg"
},
{
id: 10,
name: "BMW Série 3",
category: "Économique",
gearbox: "Automatique",
fuel: "Essence",
seats: 5,
price: 350,
available: false,
image: "https://tse2.mm.bing.net/th/id/OIP.6YvuGcJtRjyaJgK06sj3UQHaFj?r=0&w=1600&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
  id: 11,
  name: "Audi A3",
  category: "Berline",
  gearbox: "Automatique",
  fuel: "Essence",
  seats: 5,
  price: 650,
  available: false,
  image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800"
},
{
  id: 12,
  name: "Range Rover Evoque",
  category: "SUV",
  gearbox: "Automatique",
  fuel: "Diesel",
  seats: 5,
  price: 1200,
  available: true,
  image: "https://tse1.mm.bing.net/th/id/OIP.gHDNw9N8JFu6qUQk_86oLgHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
  id: 13,
  name: "Porsche Cayenne",
  category: "Luxe",
  gearbox: "Automatique",
  fuel: "Essence",
  seats: 5,
  price: 1500,
  available: true,
  image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
},
{
  id: 14,
  name: "Kia Sportage",
  category: "SUV",
  gearbox: "Manuelle",
  fuel: "Diesel",
  seats: 5,
  price: 550,
  available: true,
  image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800"
},
{
id: 15,
name: "Dacia Duster",
category: "SUV",
gearbox: "Manuelle",
fuel: "Diesel",
seats: 5,
price: 450,
available: true,
image: "https://tse3.mm.bing.net/th/id/OIP._RtDs_oG4uo5JXcDDvBdaQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
id: 16,
name: "Volkswagen Golf 8",
category: "Berline",
gearbox: "Automatique",
fuel: "Essence",
seats: 5,
price: 500,
available: false,
image: "https://tse4.mm.bing.net/th/id/OIP.n4LPGwUhJ-axgiMGYfOgkgHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
id: 17,
name: "Tesla Model 3",
category: "Luxe",
gearbox: "Automatique",
fuel: "Électrique",
seats: 5,
price: 1100,
available: true,
image: "https://tse2.mm.bing.net/th/id/OIP.o1jqRGK2rfMe3pP8YTKsJAHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
},
];

const handleReserve = (car) => {
setSelectedCar(car);
setPage("reservation");
};

const handlePayment = (reservation) => {
  if (!reservation || !reservation.client) {
    alert("Le nom du client est obligatoire.");
    return;
  }

  const nom = reservation.client.trim();

  if (!nom) {
    alert("Veuillez saisir le nom du client.");
    return;
  }

  const nouveauClient = {
    id: Date.now(),
    nom,
    cin: "À compléter",
    telephone: reservation.telephone || "À compléter",
    permis: "À vérifier",
    statut: "Actif",
  };

  setClients((prev) => {
    const existe = prev.some(
      (client) =>
        client.nom.toLowerCase() === nom.toLowerCase()
    );

    if (existe) {
      return prev.map((client) =>
        client.nom.toLowerCase() === nom.toLowerCase()
          ? {
              ...client,
              telephone: reservation.telephone,
            }
          : client
      );
    }

    return [...prev, nouveauClient];
  });

  setHistory((prev) => [
    ...prev,
    {
      ...reservation,
      id: `#${1047 + prev.length}`,
      status: "En cours",
    },
  ]);

  setTotal(Number(reservation.total) || 0);
  setPage("payment");
};



return ( <div className="app"> <Navbar page={page} setPage={setPage} />


  <main>
    {page === "cars" && (
      <Cars
        cars={cars}
        onReserve={handleReserve}
      />
    )}

    {page === "reservation" && (
      <Reservation
        cars={cars}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        onPayment={handlePayment}
      />
    )}

    {page === "clients" && (
      <Clients clients={clients} />
    )}

    {page === "vehicles" && (
      <Vehicles cars={cars} />
    )}

    {page === "payment" && (
      <Payment total={total} />
    )}

    {page === "history" && (
      <History history={history} />
    )}
  </main>

  <footer>
    <strong>DriveGo</strong>
    <span>Location de voitures premium</span>
  </footer>
</div>

);
}

export default App;
