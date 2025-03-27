
const env = "prod"
const BASE_URL=env === "dev" ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL : process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;

export const URL_PROJECT = {
    GET_POSTS : `${BASE_URL}/posts`,
    GET_DETAIL_POST_ID : `${BASE_URL}/posts/id/`,
    GET_CATEGORIES : `${BASE_URL}/posts/categories`,
    GET_CATEGORIE_POST : `${BASE_URL}/posts/?slug=`,
    GET_POST_BY_SLUG : `${BASE_URL}/posts/filter`
}