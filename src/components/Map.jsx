import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "1000px",
  height: "600px",
  position: "absolute",
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [0, 0],
        zoom: 5,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

      const el = document.createElement("div");
      el.id = "marker";

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `      
        <div className="p-4">
          <h2 className="font-medium text-lg">This is a popup</h2>
          <div>this is an important announcement</div>
        </div>
        `
      );

      new mapboxgl.Marker()
        .setLngLat([0, 0])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);

      const offScreenPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `      
        <div className="p-4">
          <h2 className="font-medium text-lg">This is a popup</h2>
          <div>this is an important announcement</div>
        </div>
        `
      );

      new mapboxgl.Marker()
        .setLngLat([-20, 0])
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div ref={(el) => (mapContainer.current = el)} style={styles} id="map" />
  );
};

export default MapboxGLMap;
