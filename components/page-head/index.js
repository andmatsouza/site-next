import Head from "next/head";

export const PageHead = ({...props}) => {
  return (
  <div>
    <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site sobre material de limpeza" />
        <meta name="author" content="Anderson - Telelimp" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <title>{props.title}</title>
      </Head>
  </div>
)};