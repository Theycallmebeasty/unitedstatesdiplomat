import Link from "next/link";


export default function Header() {
   return (
      <header className="flex item-center justify-between gap-5">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold  ">  
          <Link className="flex text-red-800 font-semibold text-2xl " href="/">
          <h1 className="text-3xl italic  font-bold ">United States Diplomat</h1>
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/servic'}>Services</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/contact'}>Contact</Link>
        </nav>
        <nav className="flex items-center text-gray-500 font-bold">
          <Link href={'/qoute'} className="bg-red-800 rounded-full text-white px-6 py-2">Get Quote</Link>
        </nav>
      </header>
   );
}