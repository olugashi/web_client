import React, { Component } from "react";

//import { Viewer, Entity } from "resium";
import "cesium/Source/Widgets/widgets.css";
import { Viewer, WebMapServiceImageryProvider, CesiumWidget } from "cesium";
import Button from "@material-ui/core/Button";

import MapManager from "./../logic/MapManager";

export default class MapViewer extends Component {
  constructor(props, context) {
    super(props, context);
    this.mapManager;
  }

  componentDidMount() {
    this.mapManager = new MapManager();


  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={() => { this.mapManager.startDrawPolyline(); }}>polyline </Button>
        <div id="cesiumContaner"></div>
        <div id="toolbar" />

      </div>
    );
  }
}
