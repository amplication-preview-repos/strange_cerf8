import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const WaterLayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="depth" source="depth" />
        <NumberInput step={1} label="salinity" source="salinity" />
      </SimpleForm>
    </Create>
  );
};
