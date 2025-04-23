import { ARTICLE_QUERY } from './queries';
import 'react-image-gallery/styles/css/image-gallery.css';
import ReadDetail from './ReadDetail';

export async function generateMetadata({ params }) {
  const { readId } = params;
  
  try {
    const { data } = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: ARTICLE_QUERY,
        variables: { id: readId },
      }),
    }).then(res => res.json());

    const article = data?.article;

    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    return {
      title: `${article.name} - Noise Hanoi`,
      description: article.brief,
      openGraph: {
        title: article.name,
        description: article.brief,
        images: article.photo?.url ? [
          {
            url: article.photo.url,
            width: 970,
            height: 600,
            alt: article.name,
          },
        ] : [],
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
    return {
      title: 'Noise Hanoi',
      description: 'Live Music in Hanoi',
    };
  }
}

export default function Page({ params }) {
  return <ReadDetail readId={params.readId} />;
}
