import {
  filterProductsLocal,
  getAddressesLocal,
  getAllBlogsLocal,
  getAllBrandsLocal,
  getBlogCategoriesLocal,
  getBrandNameByProductSlug,
  getCategoriesLocal,
  getDealProductsLocal,
  getLatestBlogsLocal,
  getOthersBlogLocal,
  getProductBySlugLocal,
  getSingleBlogLocal,
} from "@/data/local";

const getCategories = async (quantity?: number) => {
  return getCategoriesLocal(quantity);
};

const getAllBrands = async () => {
  return getAllBrandsLocal();
};

const getLatestBlogs = async () => {
  return getLatestBlogsLocal();
};

const getDealProducts = async () => {
  return getDealProductsLocal();
};

const getProductBySlug = async (slug: string) => {
  return getProductBySlugLocal(slug);
};

const getBrand = async (slug: string) => {
  return getBrandNameByProductSlug(slug);
};

const getMyOrders = async (_userId: string) => {
  return [];
};

const getAllBlogs = async (quantity: number) => {
  return getAllBlogsLocal(quantity);
};

const getSingleBlog = async (slug: string) => {
  return getSingleBlogLocal(slug);
};

const getBlogCategories = async () => {
  return getBlogCategoriesLocal();
};

const getOthersBlog = async (slug: string, quantity: number) => {
  return getOthersBlogLocal(slug, quantity);
};

export {
  getCategories,
  getAllBrands,
  getLatestBlogs,
  getDealProducts,
  getProductBySlug,
  getBrand,
  getMyOrders,
  getAllBlogs,
  getSingleBlog,
  getBlogCategories,
  getOthersBlog,
  filterProductsLocal,
  getAddressesLocal,
};
