import { parse } from 'path';

type BlogViewTitleProps = {
  blogTitle: string;
  blogUrl: string;
};

export default function BlogViewTitle({
  blogTitle,
  blogUrl,
}: BlogViewTitleProps) {
  const parsedUrl = blogUrl.replace('http://', '');

  return (
    <h2
      className='font-bold text-white'
      style={{
        background: `url("//www.google.com/s2/favicons?domain=${parsedUrl}") no-repeat 1px center`,
        paddingLeft: '1.4rem',
      }}
    >
      {blogTitle}
    </h2>
  );
}
