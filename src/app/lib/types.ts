export type TBlog = {
  data: {
    kind: string;
    id: string;
    name: string;
    description: string;
    published: Date;
    updated: Date;
    url: string;
    selfLink: string;
    posts: {
      selfLink: string;
      totalItems: number;
    };
    pages: {
      selfLink: string;
      totalItems: number;
    };
    locale: {
      language: string;
      country: string;
    };
  };
};

export type TPosts = {
  data: {
    kind: string;
    nextPageToken?: string;
    items: TPost[];
  };
};

export interface TPost {
  kind: string;
  id: string;
  blog: {
    id: string;
  };
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  title: string;
  content: string;
  author: {
    id: string;
    displayName: string;
    url: string;
    image: {
      url: string;
    };
  };
  replies: {
    totalItems: string;
    selfLink: string;
  };
}

export interface TSinglePost {
  data: TPost;
}
