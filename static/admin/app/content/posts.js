import { isNotIndex } from "../fields/is-not-index.js";
import { draft } from "../fields/draft.js";
import { date } from "../fields/date.js";
import { title } from "../fields/title.js";
import { description } from "../fields/description.js";
import { press } from "../fields/press.js";
import { authors } from "../fields/authors.js";
import { t } from "../i18n/translater.js";

const posts = {
  name: "posts",
  folder: "content/posts",
  label: "Articles",
  label_singular: "Article",
  description: "Tous les articles du cabinet",

  create: true,
  editor: { preview: false },
  i18n: true,

  path: "{{year}}/{{month}}/{{slug}}",
  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  sortable_fields: ["date", "title"],
  summary: "{{title}} — {{year}}",

  filter: { field: "isIndex", value: false },

  fields: [
    isNotIndex,
    draft,
    date,
    authors,
    title,
    description,
    press,
  ],
};

export default posts;
