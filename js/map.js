/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
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

  const infowindow = new InfoWindow({
    content: "<div><h3>北龙湖湿地公园露营地</h3><div><p>郑州北龙湖湿地公园，位于郑州市区东北角。因处在郑州市北龙湖周边而得名。龙湖地区是郑东新区的重要组成部分，根据规划，它西起中州大道，东至东四环快速路，北靠连霍高速公路，南依东风渠，总规划用地面积约40平方公里，是未来郑州市区最适宜居住生活的地区。北龙湖湿地公园，应该是郑州市市政绿化上最大的工程，公园范围广，工程量大，挖湖造山，植树造林，绿化修路。</p></div></div>",
    ariaLabel: "Camp location",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

initMap();