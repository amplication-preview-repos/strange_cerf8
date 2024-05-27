import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlayerSettingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PlayerSettingsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastLogin" source="lastLogin" />
        <TextField label="playerName" source="playerName" />
        <TextField label="preferences" source="preferences" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
