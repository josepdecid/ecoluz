import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs(props) {
    const { tabs } = props;
    return (
        <div className="shadow-2xl rounded-xl">
            <Tab.Group>
                <Tab.List className="flex p-2 space-x-1 bg-teal rounded-t-xl">
                    {tabs.map(({ title }) => (
                        <Tab
                            key={title}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-teal ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow text-teal'
                                        : 'text-white hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            {title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {tabs.map(({ title, content }) => (
                        <Tab.Panel
                            key={title}
                            className={classNames(
                                'bg-white rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            {content}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}