import {
  FiHome, FiShield, FiCheckCircle, FiClock, FiBriefcase, FiZap, FiMonitor,
  FiGrid, FiLogIn, FiLogOut, FiCoffee, FiDroplet, FiLayers, FiHeart, FiMoon,
  FiAward, FiWind, FiTool, FiCalendar, FiUsers, FiSearch, FiFileText,
  FiTrendingUp, FiCircle,
} from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa6';

// Resolve a string icon name to a component, with a safe fallback. Explicit
// imports keep the bundle small — only the icons we actually use are included.
const icons = {
  FiHome, FiShield, FiCheckCircle, FiClock, FiBriefcase, FiZap, FiMonitor,
  FiGrid, FiLogIn, FiLogOut, FiCoffee, FiDroplet, FiLayers, FiHeart, FiMoon,
  FiAward, FiWind, FiTool, FiCalendar, FiUsers, FiSearch, FiFileText,
  FiTrendingUp, FaLeaf,
};

export default function useIcon(name) {
  return icons[name] || FiCircle;
}
