import fs from "fs";
import pug from "pug";
import path from "path";

import { PostType } from "@/types/post";
import { timeAgo, formatDate } from "@/lib/utils";

const postCard = path.join(process.cwd(), "src/lib/post/post.pug");

export default async function renderPost(filename: string, post: PostType) {
  const svg = pug.renderFile(postCard, { ...post, date: formatDate(post.date), timeago: timeAgo(post.date) });
  await fs.promises.writeFile(filename, svg);
}
