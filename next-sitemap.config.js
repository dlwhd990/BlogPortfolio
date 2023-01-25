/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://blog.dlwhd990.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://blog.dlwhd990.vercel.app/sitemap.xml"],
  },
};
