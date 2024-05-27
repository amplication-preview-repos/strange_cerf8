import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const WaterLayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="depth" source="depth" />
        <NumberInput step={1} label="salinity" source="salinity" />
      </SimpleForm>
    </Edit>
  );
};
