import { CogIcon } from '@heroicons/react/outline'
import SettingsButton from './SettingsButton';
import icon from '/assets/favicon.png'
import { useTranslation } from 'react-i18next'

export default function AppBar() {
    const { t } = useTranslation('translation');
    
    return (
        <nav className="fixed flex items-center justify-between w-full p-3 bg-teal-500">
            {/* App logo + name */}
            <div className="flex items-center flex-shrink-0 mr-6 text-white">
                <img
                    src={icon} alt={`${t('APP_NAME')} logo`}
                    className="w-10 h-10 mr-1"
                />
                <span className="text-2xl font-bold">
                    {t('APP_NAME')}
                </span>
            </div>

            <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <SettingsButton />
                </div>
            </div>
        </nav>
    )
    /*
    return (
        <>
            <StatusBar backgroundColor="#60CCC2" barStyle="light-content" />
            <HStack bg='#32776D' px="1" py="3" justifyContent='space-between' alignItems='center'>
                <HStack space="1" ml="3" alignItems='center'>
                    <Image size="10" source={logo} alt="EcoLuz logo" />
                    <Text color="white" fontSize="20" fontWeight='bold'>
                        {t('APP_NAME')}
                    </Text>
                </HStack>

                <HStack>
                    <SortButton />
                    <SettingsButton />
                </HStack>
            </HStack>
        </>
    )*/
}
