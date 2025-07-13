import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';


export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <div className='border-b-[0.5px] border-b-gray-400'>
      <nav className='flex items-center container mx-auto justify-between'>
        <div>
          <NavigationLink href="/"> {t('home')}</NavigationLink>
          <NavigationLink href="/about"> {t('about')}</NavigationLink>
        </div>
        <div>
          <LocaleSwitcher />
          
        </div>
      </nav>
    </div>)
}