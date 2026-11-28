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
require("module-alias/register");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const post_1 = require("./lib/post");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield (0, post_1.fetchPosts)();
        const build_dir = path_1.default.join(process.cwd(), "build/posts");
        fs_1.default.mkdirSync(build_dir, { recursive: true });
        yield Promise.all(posts.map((post, index) => (0, post_1.renderPost)(path_1.default.join(build_dir, "post" + (index + 1) + ".svg"), post)));
    });
}
main();
