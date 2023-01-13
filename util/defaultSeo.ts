const DEFAULT_SEO = {
  title: "이종혁의 블로그",
  description: "개발자 이종혁의 블로그입니다.",
  canonical: "https://blog-portfolio-theta.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://blog-portfolio-theta.vercel.app/",
    title: "이종혁의 블로그",
    site_name: "개발자 이종혁의 블로그입니다.",
    images: [
      {
        url: "https://blog-portfolio-theta.vercel.app/images/ff.jpg",
        width: 285,
        height: 167,
        alt: "이미지",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default DEFAULT_SEO;
