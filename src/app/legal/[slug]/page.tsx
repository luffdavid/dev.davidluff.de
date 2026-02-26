import Legal from "../Legal";

export default function LegalPage({ params }: { params: { slug: string } }) {
  return <Legal slug={params.slug} />;
}