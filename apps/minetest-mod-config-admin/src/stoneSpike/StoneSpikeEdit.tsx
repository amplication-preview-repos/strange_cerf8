import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StoneSpikeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="height" source="height" />
        <TextInput label="material" source="material" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
