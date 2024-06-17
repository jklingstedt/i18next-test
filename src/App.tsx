import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import { Footer } from './Footer'

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    es: { nativeName: 'Spanish' },
    fr: { nativeName: 'Français' },
    pt: { nativeName: 'Português' },
    zh: { nativeName: '中文' },
}

const App = () => {
    const { t, i18n } = useTranslation()
    const [count, setCounter] = useState(0)

    return (
        <>
            <h1>React i18n Example</h1>
            <h2>Using react-i18next</h2>
            <p>
                {Object.keys(lngs).map((lng) => (
                    <button
                        key={lng}
                        style={{
                            fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                            color: i18n.resolvedLanguage === lng ? 'yellow' : 'white',
                        }}
                        type="submit"
                        onClick={() => {
                            i18n.changeLanguage(lng)
                            setCounter(count + 1)
                        }}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </p>
            <p>
                <i>{t('counter', { count })}</i>
            </p>
            <Trans i18nKey="description.part1">
                Edit <code>src/App.js</code> and save to reload.
            </Trans>
            <p>{t('description.part2')}</p>

            <Footer t={t} />
        </>
    )
}

export default App
