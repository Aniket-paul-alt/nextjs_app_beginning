"use client";

import { useSearchParams } from "next/navigation";

export default function ProductsPageList() {
    const searchParam = useSearchParams();
    console.log('ProductsPageList searchParam:', searchParam);
    const category = searchParam.get('category') || 'all';
    const page = searchParam.getAll('page') || 1;
    console.log('ProductsPageList category:', category);
    console.log('ProductsPageList page:', page);
  return (
    <div>
      <h1>Products Page</h1>
      <p>This is the products page for users.</p>
      <p>Category: {category}</p>
      <p>Page: {page}</p>
    </div>
  );
}