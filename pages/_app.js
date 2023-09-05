
import Layout from '../components/layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return <div><Head>
    <title>Anoki Resorts Vagamon</title>
    <meta content="Anoki resorts Vagamon" name="Description" /><meta content="website" property="og:type" /><meta content="Anoki Resorts | Vagamon resorts | Top resorts vagamon | Top resort in vagamon " property="og:title" /><meta content="https://www.https://www.anokiresortsvagamon.com/" property="og:url" /><meta content="Escape to the tranquil beauty of Vagamon at Anoki Resort. Experience serene landscapes, luxurious accommodations, and impeccable hospitality. Book your dream getaway today!" property="og:image:alt" /><meta content="Escape to the tranquil beauty of Vagamon at Anoki Resort. Experience serene landscapes, luxurious accommodations, and impeccable hospitality. Book your dream getaway today!" property="og:description" /><meta content="Escape to the tranquil beauty of Vagamon at Anoki Resort. Experience serene landscapes, luxurious accommodations, and impeccable hospitality. Book your dream getaway today!" name="Keywords" />
    {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
    <link rel="icon" href="/fav.png" />
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout></div>
}

export default MyApp
