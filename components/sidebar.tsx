import { getCurrentUser } from '@/lib/session';
import SearchBar from './search-bar';
import { SideBarItems } from './sidebar-items';
import UserDropdown from './user-drop-down';

export default function Sidebar() {
  return (
    <nav className="flex h-full flex-col justify-between px-2 text-sm font-medium lg:px-4">
      <div className="flex flex-col gap-1 ">
        <SearchBar className="pb-2 " />
        <SideBarItems />
      </div>
      <UserDropdown getCurrentUser={getCurrentUser} />
    </nav>
  );
}
