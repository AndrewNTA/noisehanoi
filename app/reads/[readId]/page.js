import { ARTICLE_QUERY } from './queries';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReadDetail from './ReadDetail';

export async function generateMetadata({ params }) {
  const { readId } = params;
  const defaultMetadata = {
    title: 'Noise Hanoi - Live Music in Hanoi',
    description:
      'Discover live music events, gigs, and the latest reads about the Hanoi music scene.',
  };

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ARTICLE_QUERY.loc.source.body,
        variables: { id: readId },
      }),
    });

    if (!response.ok) {
      return defaultMetadata;
    }

    const { data } = await response.json();
    const article = data?.article;

    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    return {
      title: `Noise Hanoi - ${article.name}`,
      description: article.brief,
      openGraph: {
        title: article.name,
        description: article.brief,
        images: article.photo?.url
          ? [
              {
                url: article.photo.url,
                width: 970,
                height: 600,
                alt: article.name,
              },
            ]
          : [
              {
                url: 'https://media.graphassets.com/g0u8F0NReulFIRCA4IKW',
                width: 970,
                height: 600,
                alt: 'Noise Hanoi',
              },
            ],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.name,
        description: article.brief,
        images: article.photo?.url ? [article.photo.url] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return defaultMetadata;
  }
}

export default function Page({ params }) {
  return <ReadDetail readId={params.readId} />;
}
