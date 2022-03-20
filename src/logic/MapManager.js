import * as Cesium from "cesium";

import "cesium/Source/Widgets/widgets.css";
import "./DrawHelper.css";
import "./moreStyle.css";
import DrawHelper from "./DrawHelper";

class MapManager {
  constructor() {
    this._Viewer;
    this._drawHelper;
    this._scene;
    this.ellipsoid;
    this._homeLocation;
    this._contaner;

    this._initializeCesium();
  }

  _initializeCesium() {
    Cesium.Ion.defaultAccessToken  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYjEzOTc3Yi1mZGQ3LTQ2M2ItYWRhNy05YjQ4OWFjNDgzYjQiLCJpZCI6NDYyOCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MTI2NjUzNX0.IElSGP-gOEmsWxZRsWGM6z29yUD3xPQJvlaqEB98TkQ"
    var layer = new Cesium.WebMapServiceImageryProvider({
      url: "http://localhost:8081/geoserver/nurc/wms",
      layers: "nurc:Arc_Sample",
      parameters: {
        fromat: "image/png"
      }
    });

    this._Viewer = new Cesium.Viewer("cesiumContaner", {
      //imageryProvider: layer,
      baseLayerPicker: false,
      geocoder: false,
      timeline: false,
      infoBox: false,
      navigationHelpButton: false,
      shouldAnimate: false,
      animation: false
    });
    this._scene = this._Viewer.scene;
    this._drawHelper = new DrawHelper(this._Viewer);

    var toolbar = this._drawHelper.addToolbar(
      document.getElementById("toolbar"),
      {
        buttons: ["marker", "polyline", "polygon", "circle", "extent"]
      }
    );
  }

  getContaner() {
    return this._contaner;
  }
  getDrawHelper() {
    return this._drawHelper;
  }

  startDrawPolyline() {
    this._drawHelper.startDrawingPolyline({
      callback: function(positions) {
        console.log("polylineCreated" + positions);

        var polyline = new DrawHelper.PolylinePrimitive({
          positions: positions,
          width: 5,
          geodesic: true
        });
        this._scene.primitives.add(polyline);
        polyline.setEditable();
      }
    });
    return true;
  }
}

export default MapManager;
