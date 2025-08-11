import { nunitoSans } from '@/config/fonts';
import Link from 'next/link';
import { IoMoon } from 'react-icons/io5';

export const Header = () => {
  return (
    <nav className="flex px-5 sm:px-20 lg:px-30 py-8 justify-between items-center w-full bg-slate-700/50 shadow-2xs">
      {/* Logo */}
      <div className="">
        <Link href="/">
          <span className={`${ nunitoSans.className } antialiased font-bold text-4xl`}>Where in the world?</span>
        </Link>
      </div>

      <button
        className="flex items-center justify-center gap-2 hover:cursor-pointer px-4 py-2 rounded-md hover:ring-1"
      >
        <IoMoon className="w-6 h-6" />
        <p className="text-xl">Dark Mode</p>
      </button>
    </nav>
  )
}
