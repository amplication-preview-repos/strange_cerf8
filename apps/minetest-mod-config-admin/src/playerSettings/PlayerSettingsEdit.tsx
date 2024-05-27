import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PlayerSettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="lastLogin" source="lastLogin" />
        <TextInput label="playerName" source="playerName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
