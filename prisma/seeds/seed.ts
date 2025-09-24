import { PrismaClient, Prisma, Role, ActiveStatus } from "@prisma/client";
import userData from "../initial_data/users.json";

const prisma = new PrismaClient();

export async function main() {
  console.log("-------- Seeding DB --------");

  const users = await prisma.user.findMany();
  if (users.length === 0) {
    const userDataWithEnums: Prisma.UserCreateManyInput[] = userData.map(user => ({
      ...user,
      role: user.role as Role,
      userStatus: user.userStatus as ActiveStatus,
    }));

    await prisma.user.createMany({
      data: userDataWithEnums,
    });
    console.log("Users seeded successfully");
  } else {
    console.log("Users already seeded");
  }
}

main();