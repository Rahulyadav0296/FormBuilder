This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
Make sure that you have Visual code studio, nodejs and npm installed in your system and also have 

There are some Step you have to follow for running the application in VS code 

step1) create .env in outer side of the application : 
And paste the below details in the .env file


https://clerk.com/docs/quickstarts/nextjs  => for clerk setup follow the link
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y29ycmVjdC1oeWVuYS00My5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_RrDPZ5ig31tRbazZXigzNBbnPl5cYr5r5xR0RQbTXj

https://vercel.com/rahulyadav0296s-projects/~/stores => Below details are take the refer from given link
POSTGRES_PRISMA_URL="postgres://default:4QdsiJ8gYMpD@ep-broad-pond-a4r6xxyz-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:4QdsiJ8gYMpD@ep-broad-pond-a4r6xxyz.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
npm install next@latest react@latest

step 2)  Install all the below dependencies and modules in terminal  
npm install @clerk/nextjs
npm install prisma --save-dev
npm install @dnd-kit/core@next @dnd-kit/sortable@next
npm install nextjs-toploader
npx shadcn-ui@latest init
npx shadcn-ui@latest init
npm install next-themes

step4) Now after all the installation and setup you have to  run the below command for run the application
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
 note-app 
# FormBuilder 
