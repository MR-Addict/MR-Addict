import z from "zod";

import { Post } from "@/types/post";

export default async function fetchPosts() {
  const data = await fetch("https://playground.mraddict.top/api/blog/latest").then((res) => res.json());
  return z.array(Post).parse(data);
}
