import fs from "fs";
import path from "path";

import { timeAgo } from "../utils";
import { PostType } from "@/types/post";

export default function update(posts: PostType[]) {
  const filePath = path.join(process.cwd(), "src/markdown/README.md");
  const fileContent = fs.readFileSync(filePath, "utf8");

  const postsList = posts.map((post) => `- [${post.title}](${post.url}) (${timeAgo(post.date)})`);
  const insertString = `##\n\nYou can also have a look on my latest posts:\n\n${postsList.join("\n")}`;

  const writePath = path.join(process.cwd(), "README.md");
  fs.writeFileSync(writePath, fileContent.replace("@{posts}", insertString));
}
