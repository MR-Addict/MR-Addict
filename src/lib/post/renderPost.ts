import fs from "fs";
import pug from "pug";
import path from "path";

import { PostType } from "@/types/post";

const postCard = path.join(process.cwd(), "src/lib/post/post.pug");

export default async function renderPost(filename: string, post: PostType) {
  const svg = pug.renderFile(postCard, post);
  await fs.promises.writeFile(filename, svg);
}
