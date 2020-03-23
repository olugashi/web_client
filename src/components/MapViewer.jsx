import React, { Component } from "react";

//import { Viewer, Entity } from "resium";
import "cesium/Source/Widgets/widgets.css";
import { Viewer, WebMapServiceImageryProvider, CesiumWidget } from "cesium";

import MapManager from "./../logic/MapManager";

export default class MapViewer extends Component {
  constructor(props, context) {
    super(props, context);
    this.mapManager;
  }

  componentDidMount() {
    this.mapManage = new MapManager();
  }

  render() {
    return (
      <div>
        <div id="cesiumContaner"></div>
        <div id="toolbar" />
      </div>
    );
  }
}
