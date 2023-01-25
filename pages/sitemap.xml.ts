import { GetServerSidePropsContext } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { connectToDatabase } from "../util/mongodb";

const Sitemap = () => {};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const db = await connectToDatabase();
  const collection = db.collection("article");
  const result = await collection.distinct("_id", {});
  const res = context.res;
  const sitemap = result.map((id) => ({
    loc: `https://blog.dlwhd990.vercel.app/article/${id.toString()}`,
    lastmod: new Date().toISOString(),
  }));
  const fields = [...sitemap];

  return getServerSideSitemap(context, fields);
};

export default Sitemap;
