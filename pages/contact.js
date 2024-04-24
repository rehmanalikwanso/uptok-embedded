import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>@import url('https://storage.googleapis.com/uptok-staging/widget/styles-widget-3.css');</style>
      </Head>
      <div id='uptok-root' className='uptok-widget'></div>

      <div>ContactUs</div>
      <Script id="uptok-bundle" type="text/javascript" mode="widget" src="https://storage.googleapis.com/uptok-staging/widget/uptok-bundle-widget-3.js" uptokclienttoken="7fc283b7803ddd83db5192492fbbd34e:2ec7723a4f9213fa02ed8f804b5cf6d3" />

    </>
  )
}

export default ContactUs
