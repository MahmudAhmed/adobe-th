This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, set up .env file:

- NEXT_PUBLIC_API_URL=
- NEXT_PUBLIC_API_KEY=
- NEXT_PUBLIC_AUTH_DOMAIN=
- NEXT_PUBLIC_PROJECT_ID=
- NEXT_PUBLIC_STORAGE_BUCKET=
- NEXT_PUBLIC_MESSAGING_ID=
- NEXT_PUBLIC_APP_ID=

Next, install dep: 

```
npm install
# or
yarn insall

```
Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the homepage.


## Features

- Like & Dislike Images - Connected to FirestoreDB (NoSQL DB)
    - Rest API routes 
        `/api/images` 
        GET - Fetches all the photos in the db collections "Images"
`/api/images/[id]` 
PUT - Add/Remove likes from photo with id

-   Data Cache
    - Get request is cached, for every request to fetch images from the DB it only accesses the DB only once until the cache is revalidated (i.e. when a user adds/dislikes image) - Read about [NextJs Data Cache/Deduping](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating) here.
- Use of server actions
    - Enhanced security and UX with all database communication done on the server and minimized the requests made from the client. 
- Authentication (only supports the core feature of logging in and out)
    - Login with Google
- Modal Photo Preview
- Responsive UI & Mobile Friendly
- Built with scalability in mind, each component, type declaration, and function is designed with the intent to add more features and utility to them.
- Typescript (Strongly Typed)
    - Please ignore the one place I had used "any", I was running out of time.
```
useEffect(() => {
    getCurrentUser().then(
      (res: any) => {
        res && setUserId(res?.uid)
      }
    )
  }, []) 
```

## If only I had more time...

- Unit Testing (unfortunately Next does not come with building support for jest/cypress similar to "create-react-app", so I didn't want to spend the limited time I had doing the setup)
- Host on Vercel - Some build errors happen only on prod, unfortunately, I noticed only after the time clock had run out. 
- Auth - Users should be stored on DB, and a more thorough feature to limit the likes/dislikes of users to once. 
- Add Navigation on Modal View & Likes/Dislikes from the Modal.
- Loading UI when images and async functions are running


## Docker

```
docker pull mahmudahmed/adobe-th
```

To run: 

```
docker run -p 3000:3000 -e NEXT_PUBLIC_API_KEY=[API_KEY] mahmudahmed/adobe-th
```

