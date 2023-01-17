interface Comment {
  _id: object;
  articleId: string;
  content: string;
  date: number;
  public: boolean;
}

export default Comment;
