import { prisma } from "../src/lib/prisma"

async function seed() {
    await prisma.event.create({
        data: {
            id: "95013cee-7c9c-443f-83a8-ece38e85f306",
            title: "Unite Summit 2",
            slug: "unite-summitt-2",
            details: "Event tec",
            maximumAttendees: 120 
        }
    })
}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})