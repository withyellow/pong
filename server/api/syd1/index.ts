
    import { createHandler } from "../../helpers/factory";

    export const config = {
      runtime: "edge",
      regions: ["syd1"],
    };

    export default createHandler("syd1");
  