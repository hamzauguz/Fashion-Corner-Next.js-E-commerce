import { addresses } from "./addresses";
import { blogCategories, blogs } from "./blogs";
import { brands } from "./brands";
import { categories } from "./categories";
import { products } from "./products";

export { addresses, blogCategories, blogs, brands, categories, products };

function categoryTitle(id: string) {
  return categories.find((c) => c._id === id)?.title;
}

function brandById(id: string) {
  return brands.find((b) => b._id === id);
}

/** Product shape used by shop UI (categories expanded to titles). */
export function toShopProduct(product: (typeof products)[number]) {
  const { categoryIds, brandId, ...rest } = product;
  return {
    ...rest,
    categories: categoryIds
      .map((id) => categoryTitle(id))
      .filter(Boolean) as string[],
    brand: brandId
      ? { _type: "reference" as const, _ref: brandId }
      : undefined,
    categoryIds,
    brandId,
  };
}

export function getCategoriesLocal(quantity?: number) {
  const list = categories
    .map((category) => ({
      ...category,
      productCount: products.filter((p) =>
        p.categoryIds.includes(category._id)
      ).length,
    }))
    .sort((a, b) => (a.title || "").localeCompare(b.title || ""));

  return typeof quantity === "number" ? list.slice(0, quantity) : list;
}

export function getAllBrandsLocal() {
  return [...brands].sort((a, b) =>
    (a.title || "").localeCompare(b.title || "")
  );
}

export function getDealProductsLocal() {
  return products
    .filter((p) => p.status === "hot")
    .map(toShopProduct)
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
}

export function getProductBySlugLocal(slug: string) {
  const product = products.find((p) => p.slug.current === slug);
  return product ? toShopProduct(product) : null;
}

export function getBrandNameByProductSlug(slug: string) {
  const product = products.find((p) => p.slug.current === slug);
  if (!product) return [];
  const brand = brandById(product.brandId);
  return [{ brandName: brand?.title }];
}

export function getLatestBlogsLocal() {
  return blogs
    .filter((b) => b.isLatest)
    .sort((a, b) => (a.title || "").localeCompare(b.title || ""));
}

export function getAllBlogsLocal(quantity: number) {
  return [...blogs]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, quantity);
}

export function getSingleBlogLocal(slug: string) {
  return blogs.find((b) => b.slug.current === slug) || null;
}

export function getBlogCategoriesLocal() {
  return blogs.map((blog) => ({
    blogcategories: blog.blogcategories.map((cat) => {
      const full = blogCategories.find((c) => c.title === cat.title);
      return full || cat;
    }),
  }));
}

export function getOthersBlogLocal(slug: string, quantity: number) {
  return blogs
    .filter((b) => b.slug.current !== slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, quantity)
    .map((blog) => ({
      publishedAt: blog.publishedAt,
      title: blog.title,
      mainImage: blog.mainImage,
      slug: blog.slug,
      author: blog.author,
      categories: blog.blogcategories.map((c) => ({
        title: c.title,
        slug: blogCategories.find((bc) => bc.title === c.title)?.slug.current,
      })),
    }));
}

export function getAddressesLocal() {
  return [...addresses];
}

export function filterProductsLocal(options: {
  categorySlug?: string | null;
  brandSlug?: string | null;
  minPrice?: number;
  maxPrice?: number;
  variant?: string | null;
}) {
  const {
    categorySlug,
    brandSlug,
    minPrice = 0,
    maxPrice = 10000,
    variant,
  } = options;

  const categoryId = categorySlug
    ? categories.find((c) => c.slug.current === categorySlug)?._id
    : undefined;
  const brandId = brandSlug
    ? brands.find((b) => b.slug.current === brandSlug)?._id
    : undefined;

  return products
    .filter((product) => {
      if (categoryId && !product.categoryIds.includes(categoryId)) return false;
      if (brandId && product.brandId !== brandId) return false;
      if ((product.price ?? 0) < minPrice || (product.price ?? 0) > maxPrice)
        return false;
      if (variant && product.variant !== variant) return false;
      return true;
    })
    .map(toShopProduct)
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""));
}
