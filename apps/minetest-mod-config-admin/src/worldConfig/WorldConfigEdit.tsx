import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const WorldConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="creationDate" source="creationDate" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="worldName" source="worldName" />
      </SimpleForm>
    </Edit>
  );
};
