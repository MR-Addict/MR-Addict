import "module-alias/register";

import fs from "fs";
import path from "path";

import { fetchPosts, renderPost } from "./lib/post";

async function main() {
  const posts = await fetchPosts();

  const build_dir = path.join(process.cwd(), "build/posts");
  fs.mkdirSync(build_dir, { recursive: true });

  await Promise.all(posts.map((post, index) => renderPost(path.join(build_dir, "post" + (index + 1) + ".svg"), post)));
}

main();
