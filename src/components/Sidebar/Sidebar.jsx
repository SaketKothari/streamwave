import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import SidebarItem from './SidebarItem';
import { categories } from '../../utils/constants';
import { DataContext } from '../../context/ApiContext';

const Sidebar = () => {
  const { mobileMenu, selectedCategory, setSelectedCategory } =
    useContext(DataContext);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectedCategory(name);
      case 'home':
        return setSelectedCategory(name);
      case 'menu':
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`w-[240px] md:block overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? 'translate-x-0' : ''
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <SidebarItem
                text={item.type === 'home' ? 'Home' : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate('/');
                }}
                className={`${
                  selectedCategory === item.name ? 'bg-white/[0.15]' : ''
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </div>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Build by Saket Kothari
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
