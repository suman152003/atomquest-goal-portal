import { prisma } from "../../../lib/prisma";

export async function GET() {
  return Response.json(await prisma.goal.findMany());
}

export async function POST(req: Request) {
  const body = await req.json();

  return Response.json(
    await prisma.goal.create({
      data: {
        title: body.title,
        target: body.target,
        weightage: Number(body.weightage),
        uom: body.uom,
        userId: body.userId || "employee-1",
      },
    })
  );
}

export async function PATCH(req: Request) {
  const body = await req.json();

  return Response.json(
    await prisma.goal.update({
      where: { id: body.id },
      data: { status: body.status },
    })
  );
}