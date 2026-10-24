import { appleBlack, searchBlack, bagBlack } from '../../utils';
import { navLists } from './constants';

const Navbar = () => {
  return (
    <header className="w-full bg-white py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleBlack} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray-800 hover:text-gray-600 transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchBlack} alt="search" width={18} height={18} />
          <img src={bagBlack} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar