import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <main className='container mx-auto'>
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
      </main>
    </div>
  );
}