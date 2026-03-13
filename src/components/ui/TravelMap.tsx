import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import omnivore from "@mapbox/leaflet-omnivore";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function KMLLayer() {
    const map = useMap();

    useEffect(() => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        const layer = omnivore.kml("/travel.kml").addTo(map);

        layer.on("ready", () => {
            map.fitBounds(layer.getBounds());
        });

        return () => {
            map.removeLayer(layer);
        };
    }, [map])

    return null;
}

export default function TravelMap() {

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "500px", width: "100%" }}
            className="border-2"
        >
            <TileLayer
                attribution="@ OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <KMLLayer />
        </MapContainer>
    );
}