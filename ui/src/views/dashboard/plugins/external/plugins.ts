
// DON'T modify this file, it is automatically generated by Datav external plugin system
import { DatasourcePluginComponents, PanelPluginComponents } from "types/plugins/plugin"

import DemoComponents from "./panel/demo"
import CandlestickComponents from "./panel/candlestick"
import DemoDatasrouceComponents from "./datasource/demo"
export const externalPanelPlugins: Record<string,PanelPluginComponents> = {
	"demo": DemoComponents,
	"candlestick": CandlestickComponents,
}
export const externalDatasourcePlugins: Record<string,DatasourcePluginComponents> = {
	"demo": DemoDatasrouceComponents,
}