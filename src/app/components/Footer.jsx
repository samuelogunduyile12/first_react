export default function Footer() {
  return (
    <footer className='h-36 bg-slate-950 flex items-center justify-center text-white'>
        <p>&copy; univel {(new Date('01-01-2017').getFullYear())} - {(new Date().getFullYear())}</p>
    </footer>
  )
}
