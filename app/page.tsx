import Link from 'next/link';

export default function Home() {
  return (
  <main>
    <Link href="/">
      <div className="frontpage-card">
        <div className="frontpage-title">Playing<br />Card<br />to Get</div>
      </div>
    </Link>
  </main>
  );
}
