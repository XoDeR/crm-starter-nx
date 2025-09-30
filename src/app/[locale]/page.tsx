import { Button } from '@/components/ui/button';

//import { useTranslations } from 'next-intl'; // not async
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function Home() {

  //const t = useTranslations('HomePage'); // not async
  const t = await getTranslations('HomePage');
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        {t('title')}
      </h1>

      <Button asChild>
        <Link href="/admin/users">Users administration</Link>
      </Button>


    </div>
  );
}
