import React, { Component } from "react";
import Button from "@material-ui/core/Button";

//import { Viewer, Entity } from "resium";
import "cesium/Source/Widgets/widgets.css";
import { Viewer, WebMapServiceImageryProvider, CesiumWidget } from "cesium";

import MapManager from "./../logic/MapManager";

export default class MapViewer extends Component {
  constructor(props, context) {
    super(props, context);
    this.drawPolyline = this.drawPolyline.bind(this);
    this.mapManager;
  }

  componentDidMount() {
    this.mapManage = new MapManager();
  }

  drawPolyline() {
    this.mapManage.startDrawPolyline().then(positions => {
      this.mapManage.createDrawPolyline({ positions });
    });
  }

  render() {
    return (
      <div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.drawPolyline}
          ></Button>
        </div>
        <div>
          <div id="cesiumContaner"></div>
        </div>
      </div>
    );
  }
}
