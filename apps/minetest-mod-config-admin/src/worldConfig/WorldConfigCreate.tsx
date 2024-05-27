import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const WorldConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="creationDate" source="creationDate" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="worldName" source="worldName" />
      </SimpleForm>
    </Create>
  );
};
