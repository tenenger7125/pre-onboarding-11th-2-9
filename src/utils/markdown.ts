import { remark } from 'remark';
import html from 'remark-html';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';

export const markdown = {
  async parse(htmlString: string) {
    const { value } = await remark()
      .use(html as Plugin<[], Root, string>)
      .process(htmlString);

    return { __html: String(value) };
  },
};
