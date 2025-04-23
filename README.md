# Noise Hanoi

A Next.js website for promoting music events and community in Hanoi.

## Features

- Live music events listing
- Articles and blog posts
- Venue information
- Artist profiles

## Tech Stack

- Next.js 14
- Material-UI
- Apollo Client
- GraphQL
- Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/                # Next.js app directory
│   ├── components/    # Shared components
│   ├── lib/          # Utilities and configurations
│   ├── gigs/         # Gigs page
│   ├── reads/        # Reads pages
│   └── styles.css    # Global styles
├── public/           # Static files
└── package.json
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```
NEXT_PUBLIC_GRAPHCMS_URL=your_graphcms_url
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/getting-started/usage/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
