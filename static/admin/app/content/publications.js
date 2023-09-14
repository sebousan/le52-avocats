import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { press } from '../fields/press.js'
import { publications_concerned } from '../fields/publications_concerned.js'

const publications = {
    name: 'publications',
    folder: 'content/publications',
    label: t.content.publications.label,
    label_singular: t.content.publications.label_singular,
    description: t.content.publications.description,

    create: true,
    editor: { preview: false },
    i18n: true,

    path: '{{year}}/{{month}}/{{slug}}',
    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    sortable_fields: ['date', 'title'],
    summary: '{{title}} — {{year}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        publications_concerned,
        title,
        description,
        press
    ]
}

export default publications