import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Header from '../components/header/Header';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Header />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}