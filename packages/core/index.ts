import { makeInstaller } from "@tohka-element/utils";
import components from "./components";
import "@tohka-element/theme/index.css"
const installer = makeInstaller(components);

export * from "@tohka-element/components";
export default installer;