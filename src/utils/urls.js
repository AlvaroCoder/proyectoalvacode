const env = "prod"
const BASE_URL=env === "dev" ? "http://localhost:8082" : "https://backend-blog-alvacode.fly.dev"
export const URL_PROJECT = {
    GET_POSTS : `${BASE_URL}/posts`,
    GET_DETAIL_POST_ID : `${BASE_URL}/posts/id/`,
    GET_CATEGORIES : `${BASE_URL}/posts/categories`,
    GET_CATEGORIE_POST : `${BASE_URL}/posts/?slug=`,
}