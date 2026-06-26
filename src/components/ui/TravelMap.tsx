'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMemo } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { travelPlaces, categoryColors, categoryLabels, TravelCategory } from "@/data/travels";

function makeIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 13px;
      height: 13px;
      background: ${color};
      border: 2px solid white;
      border-radius: 50%;
      box-shadow: 0 1px 4px rgba(0,0,0,0.45);
    "></div>`,
    iconSize: [13, 13],
    iconAnchor: [6, 6],
    popupAnchor: [0, -10],
  });
}

export default function TravelMap() {
  const icons = useMemo(() => {
    if (typeof window === "undefined") return null;
    return Object.fromEntries(
      (Object.entries(categoryColors) as [TravelCategory, string][]).map(
        ([cat, color]) => [cat, makeIcon(color)]
      )
    ) as Record<TravelCategory, L.DivIcon>;
  }, []);

  return (
    <div className="w-full space-y-3">
      <MapContainer
        center={[30, -20]}
        zoom={2}
        style={{ height: "450px", width: "100%" }}
        className="border-2 border-white/20 rounded"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {icons &&
          travelPlaces.map((place) => (
            <Marker
              key={place.name}
              position={[place.lat, place.lng]}
              icon={icons[place.category]}
            >
              <Popup>
                <div style={{ minWidth: "160px" }}>
                  <p style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>
                    {place.name}
                  </p>
                  {place.description && (
                    <p style={{ fontSize: "12px", color: "#555", marginBottom: "4px" }}>
                      {place.description}
                    </p>
                  )}
                  {place.photo && (
                    <img
                      src={place.photo}
                      alt={place.name}
                      style={{ width: "100%", borderRadius: "4px", marginTop: "6px" }}
                    />
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 justify-center">
        {(Object.entries(categoryColors) as [TravelCategory, string][]).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-2">
            <span
              style={{
                display: "inline-block",
                width: "11px",
                height: "11px",
                background: color,
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
            <span>{categoryLabels[cat]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
