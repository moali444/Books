import { useTranslation } from 'react-i18next';
import countryFlagAr from '@assets/images/png/eg.png';
import countryFlagEn from '@assets/images/png/en.png';

interface Item {
    languageText: string;
}
const LanguageSwitch = ({ languageText }: Item) => {
    const { i18n } = useTranslation();
    document.documentElement.lang = i18n.language;

    return (
        <>
            {i18n.language === 'en' && <span
                onClick={() => {
                    //window.location.reload(),
                    window.scroll({
                        top: 0,
                        behavior: 'smooth',
                    }),
                        i18n.changeLanguage('ar')
                }}
            >
                {languageText} <img src={countryFlagAr} alt='logo' />
            </span>}

            {i18n.language === 'ar' && <span
                onClick={() => {
                    //window.location.reload(),
                    window.scroll({
                        top: 0,
                        behavior: 'smooth',
                    }),
                        i18n.changeLanguage('en')
                }}
            >
                {languageText} <img src={countryFlagEn} alt='logo' />
            </span>}
        </>
    );
}

export default LanguageSwitch;
