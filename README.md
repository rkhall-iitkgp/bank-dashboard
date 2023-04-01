##  About Software

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This app can be used to by users to maintain their account using their phone number and link their bank accounts with their accounts on our software and by their consents we can provide them analysis of their transactions. Users can set limit for different types of transaction and can be notified using a mail if they exceed that limit at any point. We are using ML model to classify their transactions which is present in https://github.com/rkhall-iitkgp/Analyser-Module and all the users are managed using https://github.com/rkhall-iitkgp/Neobank-backend and transactions are managed using https://github.com/rkhall-iitkgp/Transaction-backend.

##  Instructions to build and run the software

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

![01 04 2023_15 13 33_REC](https://user-images.githubusercontent.com/74675085/229279408-ef5fcd33-646d-4b0a-8eaa-2c18cecb819f.png)
Landing Page

![01 04 2023_15 23 45_REC](https://user-images.githubusercontent.com/74675085/229279401-f1134da7-6c50-4fdf-86ee-655e572301f0.png)
Adding Account

<img width="1440" alt="Screenshot 2023-04-01 at 3 23 21 PM" src="https://user-images.githubusercontent.com/74675085/229279272-d8274d22-6cfe-4c3d-b036-66401f3230fe.png">
Analysis of account



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
