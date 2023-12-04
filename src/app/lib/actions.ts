"use server";

import prisma from "./prisma";
import { redirect } from "next/navigation";

export async function fetchSnippets() {
  return await prisma.snippet.findMany({
    // where: { private: true }, // use this for peofile
    include: {
      author: {
        select: { username: true , image: true, email: true},
      },
    },
  });
}

export async function createSnippet({
  title,
  content,
  isprivate,
  tag,
  authorId,
}: any) {
  try {
    return await prisma.snippet.create({
      data: {
        title,
        content,
        private: isprivate === "on",
        tag,
        authorId,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    //TODO : Revalidate the User Profile page with updated posts
    // revalidatePath("/");
    redirect("/");
  }
}

export async function createUser({ name, email, image }: any) {
  const exisingUser = await fetchUser(email);

  if (!exisingUser) {
    return await prisma.user.create({
      data: {
        username: name,
        email,
        image,
      },
    });
  }
  return;
}

export async function fetchUser(email: string) {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}
