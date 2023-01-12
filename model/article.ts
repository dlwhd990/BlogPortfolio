type Article = {
  _id: object;
  title: string;
  content: string;
  date: number;
  category: string;
  menu: string;
  commentCount: number;
  likeCount: number;
  coverImage: string;
  previewContent: string;
};

export default Article;
