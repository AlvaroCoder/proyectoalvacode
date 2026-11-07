export const categorieService = {
    async getCategories() {
        const response = await fetch('/api/categories');
        const data = await response.json();
        return data?.data;
    }
}