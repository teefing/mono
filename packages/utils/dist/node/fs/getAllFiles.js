"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilesInFolder = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getDirsInFolder = (dirPath) => {
    return fs_1.default
        .readdirSync(dirPath)
        .filter(d => fs_1.default.lstatSync(path_1.default.resolve(dirPath, d)).isDirectory())
        .map(d => path_1.default.resolve(dirPath, d));
};
const getFilesInFolder = (dirPath) => {
    return fs_1.default
        .readdirSync(dirPath)
        .filter(d => fs_1.default.lstatSync(path_1.default.resolve(dirPath, d)).isFile())
        .map(d => path_1.default.resolve(dirPath, d));
};
const getAllFilesInFolder = (dirPath) => {
    const files = getFilesInFolder(dirPath);
    const dirs = getDirsInFolder(dirPath);
    const innerFiles = dirs.map(d => (0, exports.getAllFilesInFolder)(d)).flat();
    return [...files, ...innerFiles];
};
exports.getAllFilesInFolder = getAllFilesInFolder;
