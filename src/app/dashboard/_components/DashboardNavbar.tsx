"use client"
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { FC } from 'react'
import { usePathname } from 'next/navigation';


interface DashboardNavbarProps {
  
}
const DashboardNavbar: FC<DashboardNavbarProps> = ({}) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-lg font-semibold">Dominate Links</h1>
            </div>
          </div>
          <div className="flex items-center">
            <UserButton />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 mb-2 flex">
        <Link href={'/dashboard/links'} className={`w-fit flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 hover:bg-gray-200 
        ${pathname==="/dashboard/links"?"underline underline-offset-4":""}
        `}>
          Links
        </Link>
        <Link href={'/dashboard/appearance'} className={`w-fit flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 hover:bg-gray-200 
        ${pathname==="/dashboard/appearance"?"underline underline-offset-4":""}
        `}>
        Appearance
        </Link>
        <Link href={'/dashboard/settings'} className={`w-fit flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900 hover:bg-gray-200 
        ${pathname==="/dashboard/settings"?"underline underline-offset-4":""}
        `}>
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
