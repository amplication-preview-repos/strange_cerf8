import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StoneSpikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="height" source="height" />
        <TextInput label="material" source="material" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};
