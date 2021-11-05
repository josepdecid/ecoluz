import ba from './translations/build/ba.json'
import ca from './translations/build/ca.json'
import es from './translations/build/es.json'
import ga from './translations/build/ga.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    ba: { translation: ba },
    ca: { translation: ca },
    es: { translation: es },
    ga: { translation: ga }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        debug: true,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n