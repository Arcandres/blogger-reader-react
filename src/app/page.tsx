import Welcome from './components/welcome';

export default async function Home({
  searchParams,
}: {
  searchParams: { created: 'true' | 'false' };
}) {
  return <Welcome searchParams={searchParams} />;
}
