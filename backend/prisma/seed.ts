import { PrismaClient, Role, SeatStatus, SeatZone } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("password123", 10);
    //create admin and user
    await prisma.user.createMany({
    data: [
        {
        name: "Krishna Gupta",
        email: "krishna@company.com",
        password,
        role: Role.EMPLOYEE
        },
        {
        name: "John Doe",
        email: "john@company.com",
        password,
        role: Role.EMPLOYEE
        },
        {
            name: "System Admin",
            email: "admin@blureserve.com",
            password,
            role: Role.ADMIN

        }
    ]
    });

    const cafeteria = await prisma.cafeteria.create({
    data: {
        name: "Main Cafeteria",
        building: "Building A",
        floor: 1,
        capacity: 50
    }
    });

    const seats = [];
    for(let i=1;i<=50;i++){
        seats.push({
        seatNumber: `A${i}`,
        cafeteriaId: cafeteria.id,
        zone: SeatZone.CENTER,
        status: SeatStatus.AVAILABLE,
        isWindowSeat: i <= 5
        });
    }
    await prisma.seat.createMany({
    data:seats
});

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


