import * as Cesium from "cesium";

import "cesium/Source/Widgets/widgets.css";
import "./DrawHelper.css";
import "./moreStyle.css";
import DrawHelper from "./DrawHelper";

class MapManager {
  constructor() {
    this._Viewer;
    this._drawHelper;
    this._seene;
    this.ellipsoid;
    this._homeLocation;
    this._contaner;

    this._initializeCesium();
  }

  _initializeCesium() {
    var layer = new Cesium.WebMapServiceImageryProvider({
      url: "http://localhost:8081/geoserver/nurc/wms",
      layers: "nurc:Arc_Sample",
      parameters: {
        fromat: "image/png"
      }
    });

    this._Viewer = new Cesium.Viewer("cesiumContaner", {
      imageryProvider: layer,
      baseLayerPicker: false,
      geocoder: false,
      timeline: false,
      infoBox: false,
      navigationHelpButton: false,
      shouldAnimate: false,
      animation: false
    });

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
}

export default MapManager;
