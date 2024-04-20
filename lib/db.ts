import { PrismaClient } from "@prisma/client";

// usually you would have to do this:
// export const db = globalThis.prisma || new PrismaClient();

// But Next.js uses hot reload and during that hot reload, PrismaClient will be initialized multiple times
// And thats gonna cause a memory leak, so we need to check if the prisma client is already initialized

declare global {
  var prisma: PrismaClient | undefined;
}

// we check if we already have it stored in the global object, if not, we initialize it
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
