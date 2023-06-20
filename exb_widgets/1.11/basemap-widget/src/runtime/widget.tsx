import { React, AllWidgetProps } from 'jimu-core';
import { IMConfig } from '../config';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';

import Basemap from 'esri/Basemap';
import esriRequest from 'esri/request';
import BaseTileLayer from 'esri/layers/BaseTileLayer';
import BasemapGallery from 'esri/widgets/BasemapGallery';

const BEVURL = 'https://maps.bev.gv.at/tiles/{z}/{x}/{y}.png';

const { useState, useRef, useEffect } = React;

const BEVTileLayer = BaseTileLayer.createSubclass({
  properties: {
    urlTemplate: null,
  },

  // generate the tile url for a given level, row and column
  getTileUrl: function (level, row, col) {
    const z = level.toString().padStart(2, 0);
    let x = row.toString().padStart(9, 0);
    let y = col.toString().padStart(9, 0);

    // this is the BEV tiling scheme
    x = x.substr(0, 3) + '/' + x.substr(3, 3) + '/' + x.substr(6, 3);
    y = y.substr(0, 3) + '/' + y.substr(3, 3) + '/' + y.substr(6, 3);

    return this.urlTemplate.replace(/\{z\}/g, z).replace(/\{x\}/g, y).replace(/\{y\}/g, x);
  },

  // This method fetches tiles for the specified level and size.
  fetchTile: function (level, row, col, options) {
    // get the url for this tile
    const url = this.getTileUrl(level, row, col);

    // request for tiles based on the generated url
    // the signal option ensures that obsolete requests are aborted
    return esriRequest(url, {
      responseType: 'image',
    }).then(
      function (response) {
        // when esri request resolves successfully
        // get the image from the response
        const image = response.data;
        const width = this.tileInfo.size[0];
        const height = this.tileInfo.size[0];

        // create a canvas with 2D rendering context
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        // Draw the blended image onto the canvas.
        context.drawImage(image, 0, 0, width, height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        context.putImageData(imageData, 0, 0);

        return canvas;
      }.bind(this)
    );
  },
});

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const basemapGalleryContainer = useRef(null);

  const [view, setView] = useState(null);
  const [basemapGallery, setBasemapGallery] = useState(null);

  const activeViewChanged = (jmv: JimuMapView) => {
    if (jmv) {
      setView(jmv.view);
    } else {
      setView(null);
    }
  };

  useEffect(() => {
    if (view && !basemapGallery) {
      const topoLayer = new BEVTileLayer({
        urlTemplate: BEVURL,
        title: 'BEV-Topografie',
      });

      const basemapBEV = new Basemap({
        baseLayers: [topoLayer],
        title: 'BEV Topografie',
        id: 'basemap',
        thumbnailUrl:
          'https://gis.geosphere.at/portal/sharing/rest/content/items/1a94736328a1458abe435d23508f1822/data',
      });

      const basemapAT = new Basemap({
        portalItem: {
          id: 'df7d6cc9be754db8970614d2ee661f57',
          portal: {
            url: 'https://gis.geosphere.at/portal',
          },
        },
      });

      const basemapOSM = new Basemap({
        portalItem: {
          id: '5f6efd84434842fb9dcdcf6b9116dcd9',
          portal: {
            url: 'https://gis.geosphere.at/portal',
          },
        },
      });

      const basemapGalleryDiv = document.createElement('div');
      basemapGalleryContainer.current.append(basemapGalleryDiv);

      setBasemapGallery(
        new BasemapGallery({
          container: basemapGalleryDiv,
          view: view,
          source: [basemapAT, basemapBEV, basemapOSM],
        })
      );
    }

    return () => {
      if (basemapGallery) {
        basemapGallery.destroy();
        setBasemapGallery(null);
      }
    };
  }, [view]);

  return (
    <div className="widget-basemap-widget">
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onActiveViewChange={activeViewChanged}
      ></JimuMapViewComponent>
      <div ref={basemapGalleryContainer}></div>
    </div>
  );
};

export default Widget;
