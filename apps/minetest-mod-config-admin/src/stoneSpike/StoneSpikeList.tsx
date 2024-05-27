import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StoneSpikeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StoneSpikes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <TextField label="material" source="material" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="width" source="width" />
      </Datagrid>
    </List>
  );
};
