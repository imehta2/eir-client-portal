import NextAuth from "next-auth";
import Email from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Define custom AdapterUser and Profile types
type AdapterUser = {
  id: string;
  email: string;
  // ... other user properties
};

type Profile = {
  name: string;
  image: string;
  // ... other profile properties
};

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      callbacks: {
        async signIn(params) {
          // Check if the email exists in your database
          const email = params.email;
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) {
            throw new Error("Email does not exist. Please sign up or check your email.");
          }

          // Continue with the email verification logic here

          return true;
        },
      },
    }),
  ],
  callbacks: {
    async redirect(params) {
      // Redirect logic here
      if (params.url === params.baseUrl) {
        return "/welcome";
      }
      return params.url;
    },
  },
});
