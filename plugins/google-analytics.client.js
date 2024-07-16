// plugins/google-analytics.client.js
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.googletagmanager.com/gtag/js?id=G-NZ6JDJPS9C','ga');

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NZ6JDJPS9C');  // あなたの測定IDに置き換えてください
  }
});
