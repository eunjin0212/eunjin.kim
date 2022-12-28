
import dynamic from 'next/dynamic';

const Header = () => {
  const ThemeMode = dynamic(() => import('./Switch'), {ssr: false})

  return (
    <ThemeMode />
  )
};
export default Header;
