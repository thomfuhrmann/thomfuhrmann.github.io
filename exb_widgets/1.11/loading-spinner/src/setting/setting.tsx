import { React } from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';

export default function Setting(props: AllWidgetSettingProps<{}>) {
  const onSelect = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds,
    });
  };

  return (
    <div className="widget-setting-print">
      <p>Please select a map:</p>
      <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onSelect}></MapWidgetSelector>
    </div>
  );
}
