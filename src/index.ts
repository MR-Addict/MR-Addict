import "module-alias/register";

import { fetchPosts } from "./lib/post";
import { updateReadme } from "./lib/markdown";

async function main() {
  const posts = await fetchPosts();
  updateReadme(posts);
}

main();
