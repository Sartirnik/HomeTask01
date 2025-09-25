"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var VideoRouter_1 = require("./video/VideoRouter");
var videoRepos_1 = require("./video/infrastructure/videoRepos");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get('/', function (req, res) {
    res.status(200).send('working3');
});
// Тестовый роут для очистки базы
exports.app.delete('/testing/all-data', function (req, res) {
    videoRepos_1.videoRepos.clearAll();
    res.sendStatus(204);
});
// Основные роуты для /videos
exports.app.use('/videos', VideoRouter_1.VideoRouter);
//# sourceMappingURL=app.js.map