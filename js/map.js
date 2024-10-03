/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  const position = { lat: 34.821348, lng: 113.709850 };

  map = new Map(document.getElementById("map"), {
    center: position,
    zoom: 13,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Camp location'
  });
}

initMap();