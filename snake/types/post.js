"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const zod_1 = __importDefault(require("zod"));
const Post = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string(),
    date: zod_1.default.string(),
    tags: zod_1.default.array(zod_1.default.string()),
    intro: zod_1.default.string(),
    url: zod_1.default.string(),
});
exports.Post = Post;
