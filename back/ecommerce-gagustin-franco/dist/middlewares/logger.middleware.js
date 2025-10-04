"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = loggerGlobal;
function loggerGlobal(req, res, next) {
    const date = new Date().toISOString();
    console.log(`Estas ejecutando un método ${req.method} en la ruta ${req.url} ${date}`);
    next();
}
//# sourceMappingURL=logger.middleware.js.map