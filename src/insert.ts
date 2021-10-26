import { PrismaClient } from "@prisma/client";

const employees = [
  {
    title: "Test Person Number 1",
    salary: 45000,
    fte: 1,
    fteAlternate: 1,
  },
  {
    title: "Test Person Number 2",
    salary: 45000,
    fte: 1,
    fteAlternate: 1,
  },
  {
    title: "Test Person Number 3",
    salary: 45000,
    fte: 1,
    fteAlternate: 1,
  },
  {
    title: "Test Person Number 4",
    salary: 45000,
    fte: 1,
    fteAlternate: 1,
  },
];

const insert = async () => {
  const prisma = new PrismaClient();

  // This works!
  const firstEmployee = await prisma.employee.create({
    data: employees[0],
  });

  // This works too!
  await prisma.$executeRaw`INSERT INTO "Employee" (title, salary, fte, "fteAlternate") VALUES ('Test Person Number 2', 45000, 1, 1)`;

  // This saves the record, but the fte field is stored as 5e-324.
  await prisma.$executeRaw`
    INSERT INTO "Employee"
                (title, salary, fte)
    VALUES (${employees[2].title}, ${employees[2].salary}, ${employees[2].fte});
  `;

  await prisma.$executeRaw`
    INSERT INTO "Employee"
                (title, salary, "fteAlternate")
    VALUES (${employees[3].title}, ${employees[3].salary}, ${employees[3].fteAlternate});
  `;
};

insert();
