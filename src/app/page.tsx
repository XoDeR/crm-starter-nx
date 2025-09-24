import { prismadb } from '@/lib/prisma';
//import { useTranslations } from 'next-intl'; // not async
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const users = await prismadb.user.findMany();
  //const t = useTranslations('HomePage'); // not async
  const t = await getTranslations('HomePage');
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        {t('title')}
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
