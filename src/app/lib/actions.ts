"use server";

import prisma from "./prisma";

export async function fetchSnippets() {
  const feed = await prisma.snippet.findMany({
    where: { private: true },
    include: {
      author: {
        select: { username: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
}