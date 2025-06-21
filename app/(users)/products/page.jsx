// export default async function ProductsPage(props) {
//     const searchParams = await props.searchParams;
//     console.log('ProductsPage searchParams:', searchParams);
//   return (
//     <div>
//       <h1>Products Page</h1>
//       <p>This is the products page for users.</p>
//     </div>
//   );
// }

import ProductsPageList from "./productList";

export default async function ProductsPage({searchParams}) {
    const searchParam = await searchParams;
    console.log('ProductsPage searchParam:', searchParam);
    const category = searchParam?.category || 'all';
    const page = searchParam?.page || 1;
  return (
    <div>
      <ProductsPageList />
      <h1>Products Page</h1>
      <p>This is the products page for users.</p>
      <p>Category: {category}</p>
      <p>Page: {page}</p>
    </div>
  );
}