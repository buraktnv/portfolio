import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';


export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <div className='flex'>
      <nav>
        <NavigationLink href="/"> {t('home')}</NavigationLink>
        <LocaleSwitcher />
      </nav>
    </div>)
}