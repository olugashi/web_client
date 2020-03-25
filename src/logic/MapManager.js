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
    this._scene = this._Viewer.scene;
  }

  startDrawPolyline(option) {
    return new Promise((resolve, reject) => {
      const self = this;

      function callbackFinishDraw(positions) {
        if (positions) resolve(positions);
        else reject();
      }

      this._drawHelper.startDrawingPolyline({ callback: callbackFinishDraw });
    });
  }

  createDrawPolyline(option = {}) {
    var polyline = new DrawHelper.PolylinePrimitive({
      positions: option.positions,
      width: 10,
      geodesic: true
    });
    this._scene.primitives.add(polyline);
    polyline.setEditable();
  }

  getContaner() {
    return this._contaner;
  }
  getDrawHelper() {
    return this._drawHelper;
  }

  addImageryProvider(imageryProvider) {
    const _imageryProvider = this._scene.imageryLayers.addImageryProvider(
      imageryProvider
    );
    return _imageryProvider;
  }

  removeImageryProvider(imageryProvider) {
    this._scene.imageryLayers.removeImageryProvider(imageryProvider);
  }
}

export default MapManager;
