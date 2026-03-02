import { title } from './title.js'
import { url } from './url.js'
import { pdf } from './pdf.js'
import {t} from "../i18n/translater.js";

export const press = {
    name: 'press',
    label: t.fields.press,
    widget: 'object',
    collapsed: false,
    required: false,
    fields: [
        title,
        url,
        pdf
    ]
}