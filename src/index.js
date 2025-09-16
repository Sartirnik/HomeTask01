"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
function bootstrap() {
    app_1.app.listen(3001, () => {
        console.log('Appsuccessfully started on port 3001');
    });
}
bootstrap();
//# sourceMappingURL=index.js.map