declare module "@mapbox/leaflet-omnivore" {
  import * as L from "leaflet";

  interface OmnivoreLayer extends L.GeoJSON {}

  function kml(url: string, options?: object, layer?: L.Layer): OmnivoreLayer;
  function gpx(url: string, options?: object, layer?: L.Layer): OmnivoreLayer;
  function csv(url: string, options?: object, layer?: L.Layer): OmnivoreLayer;
  function wkt(url: string, options?: object, layer?: L.Layer): OmnivoreLayer;
  function topojson(url: string, options?: object, layer?: L.Layer): OmnivoreLayer;
  function polyline(url: string, options?: object, layer?: L.Layer): OmnivoreLayer;
}
