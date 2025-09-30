import { prismadb } from '@/lib/prisma';

import Container from "../../components/ui/Container";

const AdminUsersPage = async () => {
  const users = await prismadb.user.findMany();


  return (
    <Container
      title="Users administration"
      description={'Here you can manage your users'}
    >
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </Container>
  )
}

export default AdminUsersPage;