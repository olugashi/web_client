import React, { Component } from "react";

//import { Viewer, Entity } from "resium";
import "cesium/Source/Widgets/widgets.css";
import { Viewer, WebMapServiceImageryProvider, CesiumWidget } from "cesium";

import * as Cesium from "cesium";
import "../logic/DrawHelper.css";
import '../logic/moreStyle.css';
import DrawHelper from "../logic/DrawHelper"

export default class MapViewer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    var layer = new WebMapServiceImageryProvider({
      url: "http://localhost:8081/geoserver/nurc/wms",
      layers: "nurc:Arc_Sample",
      parameters: {
        fromat: "image/png"
      }
    });

    var layer1 = new WebMapServiceImageryProvider({
      url: "http://localhost:8081/geoserver/nurc/wms",
      layers: "nurc:Img_Sample",
      parameters: {
        fromat: "image/png"
      }
    });

    var viewer = new Viewer(this.cesiumContaner, {
      //imageryProvider: layer,
      //baseLayerPicker: false,
      geocoder: false,
      timeline: false,
      infoBox: false,
      navigationHelpButton: false,
      shouldAnimate: false,
      animation: false
    });


    var drawHelper = new DrawHelper(viewer);
    var toolbar = drawHelper.addToolbar(document.getElementById("toolbar"), {
      buttons: ['marker', 'polyline', 'polygon', 'circle', 'extent']
    });
  }

  render() {
    return (
      <div>
        <div
          id="cesiumContaner"
          ref={element => (this.cesiumContaner = element)}
        ></div>
        <div id="toolbar" />
      </div>
    );
  }
}

//export default MapViewer;

/**
  *
  *
  *
  * <div>
      <Viewer
        style={{
          position: "static",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        imageryProvider={false}
        baseLayerPicker={false}
        geocoder={false}
        timeline={false}
        homeButton={false}
        vrButton={false}
        fullscreenButton={false}
        animation={false}
        shouldAnimate={false}
        navigationHelpButton={false}
      >
        <ImageryLayer
          imageryProvider={
            new WebMapServiceImageryProvider({
              url: "http://localhost:8081/geoserver/nurc/wms",
              layers: "nurc:Arc_Sample",
              parameters: {
                fromat: "image/png"
              }
            })
          }
        />
      </Viewer>
  */
