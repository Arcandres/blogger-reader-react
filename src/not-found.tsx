import Link from 'next/link';
import Container from './app/components/container';

export default function NotFound() {
  return (
    <>
      <Container>
        Sorry, the resquest you made couldn&apos;t be resolved.
      </Container>
      <Link href={'/'}>Go Home</Link>
    </>
  );
}
