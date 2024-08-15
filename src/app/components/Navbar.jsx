import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-around capitalize items-center h-36 bg-slate-950 text-white text-lg">
            <Link href={'/'} >
            <li>Home</li>
            </Link>

            <Link href={'/about'} >
            <li>about</li>
            </Link>
            
            <Link href={'/contact'} >
            <li>Contact us</li>
            </Link>

            <Link href={'/help'} >
            <li>help</li>
            </Link>
        </ul>
    </nav>
  )
}
