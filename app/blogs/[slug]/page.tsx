import axios from 'axios';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';

// ✅ Font setup
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// ✅ Page props type
type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ Fetch blog post by slug
async function getPostBySlug() {
  try {
    const res = await axios.get(
      `https://marketingmavricks.com/wp-json/wp/v2/posts?slug=test&_embed`
    );
    const data = res.data;
    if (!data || data.length === 0) return null;
    return data[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// ✅ Page component
export default async function BlogPage() {
  const post = await getPostBySlug();
  if (!post) return notFound();

  const { title, content } = post;

  return (
    <>
      {/* Banner */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url(/blogBanner.png)] bg-no-repeat bg-center bg-cover brightness-50 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h3 className={`bg-[#c20000] text-white p-2 rounded-3xl ${poppins.className} w-fit`}>
            Technology News
          </h3>
          <h1
            className={`${poppins.className} mt-5 text-white font-bold text-5xl text-center`}
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-4 py-10 prose prose-lg">
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </>
  );
}
