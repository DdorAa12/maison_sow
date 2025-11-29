import React from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";


const Retails = () => {
    const pepperIconHtml = renderToString(
  <FontAwesomeIcon 
    icon={faPepperHot} 
    className="text-red-700" 
    style={{ fontSize: "30px" }}
  />
);

const customIcon = L.divIcon({
  html: pepperIconHtml,
  className: "pepper-marker",
  iconSize: [30, 30],
  iconAnchor: [21, 42],   // centre bas
});

    return (
          <section className="w-full min-h-[100vh] bg-[#00472e] px-10 py-10">

            <h2 className="text-5xl font-bold mb-10 text-red-800">
                Nos Points de Vente
            </h2>
            <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[48.8566, 2.3522]} // Paris
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={[48.8566, 2.3522]} icon={customIcon}>

          <Popup> Nous sommes ici ! </Popup>
        </Marker>
      </MapContainer>
    </div>
    <div className="mt-10 bg-[#002d1a] rounded-lg p-8 text-white">
        <h3 className="text-3xl font-bold mb-6">Nous Contacter</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-xl font-semibold mb-4 text-red-700">Coordonnées</h4>
                <p className="mb-3"><strong>Téléphone:</strong> +33 (0) 1 23 45 67 89</p>
                <p className="mb-3"><strong>Email:</strong> contact@maisonsow.fr</p>
                <p className="mb-3"><strong>Adresse:</strong> 123 Rue de la Paix, 75000 Paris</p>
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-4 text-red-700">Horaires</h4>
                <p className="mb-2">Lundi - Vendredi: 09:00 - 18:00</p>
                <p className="mb-2">Samedi: 10:00 - 17:00</p>
                <p>Dimanche: Fermé</p>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Retails;