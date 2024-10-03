/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
let map;

async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { ControlPosition } = await google.maps.importLibrary("core");
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

  const legend = document.getElementById("legend");
  const div = document.createElement("div");
  const img = '<svg xmlns="http://www.w3.org/2000/svg" width="13px" height="19px" viewBox="0 0 26 37" style="float: left; display: inline-block; overflow: visible; grid-area: 1;"><defs><filter id="7BBB648B-DA16-4823-A426-D1AA41E06A82"><feFlood result="floodFill"></feFlood><feComposite in="floodFill" in2="SourceAlpha" operator="in" result="sourceAlphaFill"></feComposite><feComposite in="sourceAlphaFill" in2="SourceGraphic" operator="in"></feComposite></filter></defs><g fill="none" fill-rule="evenodd" style="pointer-events: auto;"><path class="RIFJN-maps-pin-view-border" d="M13 0C5.8175 0 0 5.77328 0 12.9181C0 20.5733 5.59 23.444 9.55499 30.0784C12.09 34.3207 11.3425 37 13 37C14.7225 37 13.975 34.2569 16.445 30.1422C20.085 23.8586 26 20.6052 26 12.9181C26 5.77328 20.1825 0 13 0Z" fill="#C5221F"></path><path class="RIFvHW-maps-pin-view-background" fill="#EA4335" d="M13.0167 35C12.7836 35 12.7171 34.9346 12.3176 33.725C11.9848 32.6789 11.4854 31.0769 10.1873 29.1154C8.92233 27.1866 7.59085 25.6173 6.32594 24.1135C3.36339 20.5174 1 17.7057 1 12.6385C1.03329 6.19808 6.39251 1 13.0167 1C19.6408 1 25 6.23078 25 12.6385C25 17.7057 22.6699 20.55 19.6741 24.1462C18.4425 25.65 17.1443 27.2193 15.8793 29.1154C14.6144 31.0442 14.0818 32.6135 13.749 33.6596C13.3495 34.9346 13.2497 35 13.0167 35Z"></path><path class="KWCFZI-maps-pin-view-default-glyph" d="M13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z" fill="#B31412"></path><image x="50%" y="50%" preserveAspectRatio="xMidYMid meet" href="" width="15px" height="15px" style="transform: translate(-7.5px, -12.5px);"></image><text x="50%" y="50%" text-anchor="middle" style="font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; font-size: 16px; line-height: inherit; font-family: inherit; font-optical-sizing: inherit; font-size-adjust: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit;" fill="#B31412"></text></g></svg>';
  div.innerHTML = `<div>${img}<p style="float: left; margin-left: 0.5em; height: 19px;">Camp Site</p></div>`;
  legend.appendChild(div);
  map.controls[ControlPosition.RIGHT_BOTTOM].push(legend);

  // create an observer to display the legend when it has been placed in the right place
  const observer = new MutationObserver((mutationList, observer) => {
    observer.disconnect();
    legend.style.display = 'block';
  });
  observer.observe(legend, {attributes: true});
}

initMap();