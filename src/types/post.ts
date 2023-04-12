import z from "zod";

const Post = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  intro: z.string(),
  url: z.string(),
});

type PostType = z.TypeOf<typeof Post>;

export { Post };
export type { PostType };
