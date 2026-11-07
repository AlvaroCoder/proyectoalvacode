export const postsService = {
  async getPosts() {
    const response = await fetch("/api/posts");
    const data = await response.json();
    return data?.data;
  },
  async getPostBySlug(slug) {
    const response = await fetch(`/api/posts/${slug}`);
    const data = await response.json();
    return data?.data;
  },
};