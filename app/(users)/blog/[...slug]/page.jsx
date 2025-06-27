export default async function BlogPage(props) {
  const { slug } = await props.params;
  console.log('BlogPage slug:', slug);
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}