"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Image from "next/image";
import { useMemo, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  travelPlaces,
  categoryColors,
  categoryLabels,
  TravelCategory,
  TravelPlace,
} from "@/data/travels";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

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
  const [selected, setSelected] = useState<TravelPlace | null>(null);

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
        className="rounded border-2 border-white/20"
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
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      marginBottom: "4px",
                    }}
                  >
                    {place.name}
                  </p>
                  {place.description && (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#555",
                        marginBottom: "4px",
                      }}
                    >
                      {place.description}
                    </p>
                  )}
                  {place.photos && place.photos.length > 0 && (
                    <button
                      onClick={() => setSelected(place)}
                      style={{
                        marginTop: "6px",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#C17D0A",
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                      }}
                    >
                      View photos ({place.photos.length})
                    </button>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
        {(Object.entries(categoryColors) as [TravelCategory, string][]).map(
          ([cat, color]) => (
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
          )
        )}
      </div>

      <Sheet
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <SheetContent side="right" className="overflow-y-auto sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{selected?.name}</SheetTitle>
            {selected?.description && (
              <SheetDescription>{selected.description}</SheetDescription>
            )}
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4 pb-4">
            {selected?.photos?.map((photo) => (
              <div
                key={photo}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md"
              >
                <Image
                  src={photo}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
