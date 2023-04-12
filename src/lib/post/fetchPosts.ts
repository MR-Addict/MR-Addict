import z from "zod";

import { Post } from "@/types/post";

export default async function fetchPosts() {
  const data = await fetch("https://mraddict.one/api/blog/latest").then((res) => res.json());
  return z.array(Post).parse(data);
}
