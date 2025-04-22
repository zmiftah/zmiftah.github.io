
import { ReactNode } from 'react';
import Layout from './Layout';

interface MDXLayoutProps {
  children: ReactNode;
}

const MDXLayout = ({ children }: MDXLayoutProps) => {
  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto px-4 py-8">
        {children}
      </article>
    </Layout>
  );
};

export default MDXLayout;
