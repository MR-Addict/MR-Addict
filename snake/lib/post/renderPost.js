"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = renderPost;
const fs_1 = __importDefault(require("fs"));
const pug_1 = __importDefault(require("pug"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("@/lib/utils");
const postCard = path_1.default.join(process.cwd(), "src/lib/post/post.pug");
function renderPost(filename, post) {
    return __awaiter(this, void 0, void 0, function* () {
        const svg = pug_1.default.renderFile(postCard, Object.assign(Object.assign({}, post), { date: (0, utils_1.formatDate)(post.date), timeago: (0, utils_1.timeAgo)(post.date) }));
        yield fs_1.default.promises.writeFile(filename, svg);
    });
}
