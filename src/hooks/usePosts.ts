import fm from "front-matter";
import { useEffect, useState } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState<{ fileName: string; content: string }[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/posts.json");
      const fileNames: string[] = await response.json();

      const postsData = await Promise.all(
        fileNames.map(async (filename: string) => {
          const fileResponse = await fetch(`/posts/${filename}`);
          const fileContents = await fileResponse.text();
          const { body: content } = fm(fileContents);
          const fileName = filename.replace(/\.md$/, "");
          return { fileName, content };
        })
      );

      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  return { posts };
}
