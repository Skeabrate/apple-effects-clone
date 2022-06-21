import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

const HeadComponent: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Apple Clone - Sebastian Świeczkowski' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default HeadComponent;
