import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WaterLayerList } from "./waterLayer/WaterLayerList";
import { WaterLayerCreate } from "./waterLayer/WaterLayerCreate";
import { WaterLayerEdit } from "./waterLayer/WaterLayerEdit";
import { WaterLayerShow } from "./waterLayer/WaterLayerShow";
import { WorldConfigList } from "./worldConfig/WorldConfigList";
import { WorldConfigCreate } from "./worldConfig/WorldConfigCreate";
import { WorldConfigEdit } from "./worldConfig/WorldConfigEdit";
import { WorldConfigShow } from "./worldConfig/WorldConfigShow";
import { PlayerSettingsList } from "./playerSettings/PlayerSettingsList";
import { PlayerSettingsCreate } from "./playerSettings/PlayerSettingsCreate";
import { PlayerSettingsEdit } from "./playerSettings/PlayerSettingsEdit";
import { PlayerSettingsShow } from "./playerSettings/PlayerSettingsShow";
import { StoneSpikeList } from "./stoneSpike/StoneSpikeList";
import { StoneSpikeCreate } from "./stoneSpike/StoneSpikeCreate";
import { StoneSpikeEdit } from "./stoneSpike/StoneSpikeEdit";
import { StoneSpikeShow } from "./stoneSpike/StoneSpikeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MinetestModConfig"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="WaterLayer"
          list={WaterLayerList}
          edit={WaterLayerEdit}
          create={WaterLayerCreate}
          show={WaterLayerShow}
        />
        <Resource
          name="WorldConfig"
          list={WorldConfigList}
          edit={WorldConfigEdit}
          create={WorldConfigCreate}
          show={WorldConfigShow}
        />
        <Resource
          name="PlayerSettings"
          list={PlayerSettingsList}
          edit={PlayerSettingsEdit}
          create={PlayerSettingsCreate}
          show={PlayerSettingsShow}
        />
        <Resource
          name="StoneSpike"
          list={StoneSpikeList}
          edit={StoneSpikeEdit}
          create={StoneSpikeCreate}
          show={StoneSpikeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
