import Alpine from "alpinejs";
import debugLog from "./modules/_debugLog.js";

window.Alpine = Alpine;

Alpine.data("xDOM", () => {
    return {
        init() {
            debugLog("AlpineJS DOM init");
        }
    }
});

Alpine.start();