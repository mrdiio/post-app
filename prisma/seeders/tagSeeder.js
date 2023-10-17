const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const tag1 = await prisma.tag.upsert({
    where: { name: 'JavaScript' },
    update: {},
    create: {
      name: 'JavaScript',
    },
  })

  const tag2 = await prisma.tag.upsert({
    where: { name: 'PHP' },
    update: {},
    create: {
      name: 'PHP',
    },
  })

  const tag3 = await prisma.tag.upsert({
    where: { name: 'Python' },
    update: {},
    create: {
      name: 'Python',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
