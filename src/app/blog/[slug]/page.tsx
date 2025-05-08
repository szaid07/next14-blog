export default function BlogPage({ params }: { params: { slug: string } }) {
  return <>Hello {params.slug}</>;
}
