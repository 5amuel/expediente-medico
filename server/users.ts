"use server";

// import { db } from "@/db/drizzle";
// import { member, user } from "@/db/schema";
import { auth } from "@/lib/auth";
// import { eq, inArray, not } from "drizzle-orm";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";

// export const getCurrentUser = async () => {
//     const session = await auth.api.getSession({
//         headers: await headers(),
//     });

//     if (!session) {
//         redirect("/login");
//     }

//     const currentUser = await db.query.user.findFirst({
//         where: eq(user.id, session.user.id),
//     });

//     if (!currentUser) {
//         redirect("/login");
//     }

//     return {
//         ...session,
//         currentUser
//     }
// }

export const signIn = async () => {
    // export const signIn = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email: "samuel.martinez.morales@gmail.com",
                password: "password123",
                // email,
                // password,
            }
        })

        return {
            success: true,
            message: "Signed in successfully."
        }
    } catch (error) {
        const e = error as Error

        return {
            success: false,
            message: e.message || "An unknown error occurred."
        }
    }
}

export const signUp = async () => {
    // export const signUp = async (email: string, password: string, username: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                // email,
                // password,
                // name: username
                email: "samuel.martinez.morales@gmail.com",
                password: "password123",
                name: "Samuel Martinez",
            }
        })

        return {
            success: true,
            message: "Signed up successfully."
        }
    } catch (error) {
        const e = error as Error

        return {
            success: false,
            message: e.message || "An unknown error occurred."
        }
    }
}

// export const getUsers = async (organizationId: string) => {
//     try {
//         const members = await db.query.member.findMany({
//             where: eq(member.organizationId, organizationId),
//         });

//         const users = await db.query.user.findMany({
//             where: not(inArray(user.id, members.map((member) => member.userId))),
//         });

//         return users;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }