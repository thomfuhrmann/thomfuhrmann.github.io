import { React, AllWidgetProps } from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { Loading } from 'jimu-ui';

import reactiveUtils from 'esri/core/reactiveUtils';
import ScaleBar from 'esri/widgets/ScaleBar';

import './style.css';

const { useState, useEffect } = React;

export default function Widget(props: AllWidgetProps<{}>) {
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(null);
  const [scaleBar, setScaleBar] = useState(null);

  const onViewsCreated = (views) => {
    for (let viewId in views) {
      let layerViews = views[viewId].view.layerViews;

      reactiveUtils.watch(
        () => layerViews.filter((layerView) => layerView.type === 'group').map((groupLayer) => groupLayer.updating),
        (values) => {
          if (values.includes(true)) {
            setLoading(true);
          } else {
            setLoading(false);
          }
        }
      );
    }
  };

  const onActiveViewChanged = (jmv: JimuMapView) => {
    if (jmv) {
      setView(jmv.view);
    } else {
      setView(null);
    }
  };

  useEffect(() => {
    if (view && !scaleBar) {
      setScaleBar(
        new ScaleBar({
          view: view,
          unit: 'metric',
        })
      );
    }

    if (scaleBar) {
      view.ui.add(scaleBar, { position: 'bottom-left' });
    }

    return () => {
      if (scaleBar) {
        scaleBar.destroy();
        setScaleBar(null);
      }
    };
  }, [view, scaleBar]);

  return (
    <>
      <JimuMapViewComponent
        useMapWidgetId={props.useMapWidgetIds?.[0]}
        onViewsCreate={onViewsCreated}
        onActiveViewChange={onActiveViewChanged}
      ></JimuMapViewComponent>
      <div className="widget-loading-spinner">{loading && <Loading type="DONUT" width={50} height={50} />}</div>
    </>
  );
}
