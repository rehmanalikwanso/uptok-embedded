import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>@import url('https://storage.googleapis.com/uptok-production/widget/styles.css');</style>
      </Head>
      <div id='uptok-root' className='uptok-widget'></div>

      <div>ContactUs</div>
      <Script id="uptok-bundle" type="text/javascript" mode="widget" src="https://storage.googleapis.com/uptok-production/widget/uptok-bundle.js" uptokclienttoken="5e9ed212d1289f37bb6068af40937c2f:2df17874cd28b630e95e79b242ffe449" />

    </>
  )
}

export default ContactUs
