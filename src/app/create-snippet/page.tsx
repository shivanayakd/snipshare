"use client";

import React from "react";
import Form from "../components/Form";
import { createSnippet } from "../lib/actions";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  const handleCreateSnippet = async (data: FormData) => {
    const title = data.get("title")?.valueOf();
    const content = data.get("content")?.valueOf();
    const tag = data.get("tag")?.valueOf();
    const isprivate = data.get("private")?.valueOf();

    await createSnippet({
      title,
      content,
      isprivate,
      tag,
      authorId: session?.user?.id,
    });
  };

  return <Form handleCreate={handleCreateSnippet} />;
};

export default page;
