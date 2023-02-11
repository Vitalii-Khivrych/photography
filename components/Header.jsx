import Link from 'next/link';

const data = [
  { id: 1, text: 'Home', href: '/' },
  { id: 2, text: 'About', href: '/about' },
  { id: 3, text: 'Portfolio', href: '/portfolio' },
  { id: 4, text: 'Contacts', href: '/contacts' },
];

export const Header = () => {
  return (
    <header>
      <div>
        <p>Marina Khivrich</p>
        <h1>Photography</h1>
      </div>

      <nav>
        <ul>
          {data.map(({ id, text, href }) => (
            <li key={id}>
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

// export default Header;
