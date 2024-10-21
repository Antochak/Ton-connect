import Document, {Head, Html, Main, NextScript} from 'next/document';
import {META} from '~/meta';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />

          {/*Favicon*/}
          <link rel='manifest' href='/tonconnect-manifest.json' />

          <meta property='og:title' content={META.headline} />
          <meta property='og:description' content={META.description} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={META.publicUrl} />
          <meta property='og:image' content={META.preview} />
          <meta name='description' content={META.description} />
          <meta name='keywords' content={META.keywords} />
          <meta name='author' content={META.author} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
