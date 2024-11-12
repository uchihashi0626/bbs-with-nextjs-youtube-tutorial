// app/bbs-posts/create/formSchema.ts
import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, { message: "ユーザー名は2文字以上で入力してください。" }),
  title: z.string().min(2, { message: "タイトルは2文字以上で入力してください。" }),
  content: z
    .string()
    .min(10, { message: "本文は10文字以上で入力してください。" })
    .max(140, { message: "本文は140文字以下で入力してください。" }),
});
