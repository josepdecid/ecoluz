export enum LocationID {
    PCB = 'PCB',
    CYM = 'CYM'
}

export enum LanguageID {
    ba = 'ba',
    ca = 'ca',
    es = 'es',
    ga = 'ga'
}

export enum TimeFormat {
    '24h' = '24h',
    '12h' = '12h'
}

export enum Color {
    Red = 'red',
    Yellow = 'yellow',
    Green = 'green'
}

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}