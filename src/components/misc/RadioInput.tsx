import { CheckIcon } from '@heroicons/react/outline'
import { RadioGroup } from '@headlessui/react'
import { useTranslation } from 'react-i18next';

export default function RadioInput(props) {
    const { title, translate, items, value, onChange } = props;
    const { t } = useTranslation('translation')

    return (
        <RadioGroup value={value} onChange={onChange}>
            <RadioGroup.Label>
                {t(title)}
            </RadioGroup.Label>
            <div className="space-y-2">
                {items.map(({ name, code }) => (
                    <RadioGroup.Option
                        key={code}
                        value={code}
                        className={({ active, checked }) =>
                            `${checked ? 'bg-teal-500 bg-opacity-75 text-white' : 'bg-white'}
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                    >
                        {({ active, checked }) => (
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                }`}
                                        >
                                            {translate ? t(name) : name}
                                        </RadioGroup.Label>
                                    </div>
                                </div>
                                {checked && (
                                    <div className="flex-shrink-0 text-white bg-teal-400">
                                        <CheckIcon className="w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}