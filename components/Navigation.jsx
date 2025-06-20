import Link from "next/link";

export default function Navigation() {
  return (
    <nav >
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/clientcomp">Client</Link>
        </li>
        <li>
          <Link href="/servercomp">Server</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </nav>
  );
}