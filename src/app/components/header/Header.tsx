import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import ThemeToggleButton from './ThemeToggleButton'

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <div className='border-b-[0.5px] border-b-gray-400' suppressHydrationWarning>
      <nav className='flex items-center container mx-auto justify-between'>
        <div>
          <NavigationLink href="/"> {t('home')}</NavigationLink>
          <NavigationLink href="/about"> {t('about')}</NavigationLink>
        </div>
        <div className='flex items-center gap-4'>
          <LocaleSwitcher />
          <ThemeToggleButton />
        </div>
      </nav>
    </div>)
}