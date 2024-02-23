/* eslint-disable */
//@ts-nocheck
import { useEffect } from "react";
import DG from "2gis-maps";

const Map = () => {

  useEffect(() => {
    let map
    map = DG.map("map-container", {
      center: [56.27396867020905, 85.18903970718384],
      zoom: 16
    })

    DG.marker([56.27396867020905, 85.18903970718384]).addTo(map)

    return () => map && map.remove();
  }, [])

  return (
    <div
      id="map-container"
      style={{
        width: `320px`,
        height: `320px`
      }}
    />
  );
}

export default Map;
