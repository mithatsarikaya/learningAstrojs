export type BlogArray = Blog[];

export interface Blog {
  frontmatter: Frontmatter;
  file: string;
  url: string;
}

export interface Frontmatter {
  layout: string;
  title: string;
  pubDate: string;
  description: string;
  author: string;
  image: BlogImage;
  tags: string[];
}

export interface BlogImage {
  url: string;
  alt: string;
}
