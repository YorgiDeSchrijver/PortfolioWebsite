import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import usePosts from '../hooks/usePosts';

const links = [
  { to: '/', label: 'Main' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contacts' },
];

export default function BlogPostPage() {
  const { postId } = useParams();
  const { posts } = usePosts();
  const data = posts.find((post) => post.fileName === postId);
  return (
    <div className='overflow-hidden relative'>
      <Header />
      <div className='mt-48 mb-48 max-w-2xl mx-auto hyphens-auto break-words'>
        {data && (
          <Markdown
            className='text-light'
            options={{
              overrides: {
                h1: {
                  props: {
                    className: 'text-5xl font-sans font-bold mb-16',
                  },
                },
                p: {
                  props: {
                    className: 'text-lg font-sans my-6',
                  },
                },
              },
            }}
          >
            {data.content}
          </Markdown>
        )}
      </div>
      <Footer links={links} />
    </div>
  );
}
