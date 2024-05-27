import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PlayerSettingsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="lastLogin" source="lastLogin" />
        <TextInput label="playerName" source="playerName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
