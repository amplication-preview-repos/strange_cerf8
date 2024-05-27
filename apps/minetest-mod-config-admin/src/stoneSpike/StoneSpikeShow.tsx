import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const StoneSpikeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="material" source="material" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
