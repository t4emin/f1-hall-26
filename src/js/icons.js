import createElement from 'lucide/dist/esm/createElement.mjs';
import ArrowLeft from 'lucide/dist/esm/icons/arrow-left.mjs';
import ArrowLeftRight from 'lucide/dist/esm/icons/arrow-left-right.mjs';
import Calendar from 'lucide/dist/esm/icons/calendar.mjs';
import ChevronDown from 'lucide/dist/esm/icons/chevron-down.mjs';
import Flag from 'lucide/dist/esm/icons/flag.mjs';
import Search from 'lucide/dist/esm/icons/search.mjs';
import Trophy from 'lucide/dist/esm/icons/trophy.mjs';
import Users from 'lucide/dist/esm/icons/users.mjs';

const icons = {
  arrowLeft: ArrowLeft,
  compare: ArrowLeftRight,
  calendar: Calendar,
  chevronDown: ChevronDown,
  flag: Flag,
  search: Search,
  trophy: Trophy,
  users: Users
};

export function iconSvg(name, className = 'icon') {
  const iconNode = icons[name];

  if (!iconNode) {
    return '';
  }

  return createElement(iconNode, {
    class: className,
    'aria-hidden': 'true',
    focusable: 'false'
  }).outerHTML;
}

export function iconElement(name, className = 'icon') {
  const wrapper = document.createElement('span');
  wrapper.innerHTML = iconSvg(name, className);
  return wrapper.firstElementChild;
}
