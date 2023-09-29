/* 
This panel is for demonstration purpose, it is an external plugin, auto generated by Datav.

The origin plugin files is in https://github.com/data-observe/datav/tree/main/ui/external-plugins
*/

// This demo datasource is just a copy of Promtheus datasource
import { DatasourcePluginComponents } from "types/plugin";
import DatasourceEditor from "./DatasourceEditor";
import { DatasourceTypeTestData } from "./types"
import icon from './icon.svg'
import { query_testdata_alerts, run_testdata_query, testTestData } from "./query_runner";

const components: DatasourcePluginComponents = {
    datasourceEditor: DatasourceEditor,

    // defined in query_runner.ts
    runQuery: run_testdata_query,
    testDatasource: testTestData,

    queryAlerts: query_testdata_alerts,

    settings:{
        type: DatasourceTypeTestData,
        icon,
    }
}

export default  components