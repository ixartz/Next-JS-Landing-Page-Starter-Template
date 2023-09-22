import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from '@/layout/Section';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

type MarkdownDocumentProps = {
  documentPath: string;
};

const MarkdownDocument: React.FC<MarkdownDocumentProps> = ({
  documentPath,
}) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(documentPath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch(() => {});
  }, [documentPath]);

  return (
    <div className="antialiased">
      <Header />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Section yPadding="pt-8 pb-8">
        <div className="markdown-content">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export { MarkdownDocument };
