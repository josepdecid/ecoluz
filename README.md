# EcoLuz

[![DeployWorkflow](https://github.com/josepdecid/ecoluz/actions/workflows/deploy.yml/badge.svg)](https://josepdecid.me/ecoluz)
[![Issues](https://img.shields.io/github/issues-raw/josepdecid/ecoluz.svg?maxAge=25000)](https://github.com/josepdecid/ecoluz/issues)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![Donate](https://img.shields.io/badge/$-support-12a0df.svg?style=flat)](https://www.buymeacoffee.com/josepdecid)

[EcoLuz](http://josepdecid.me/ecoluz/) is an informative website that allows checking the price of the electricity in Spain during the current day, fetching the data from the [ESIOS API](https://api.esios.ree.es/), the Spanish electricity market entity.

It is mainly built with [ReactJS](https://reactjs.org/) and [TailwindCSS](https://tailwindcss.com/) with [ViteJS](https://vitejs.dev/) as the bundler, along with other libraries such as [Redux](https://redux.js.org/) or [ChartJS](https://www.chartjs.org/docs/latest/).

## Contributing: working in local

You can help to improve this website, either by creating some issues for possible enhancements or contributing to the code by cloning the repository and creating a pull request with the changes. The `main` branch is a protected branch that is only used to deploy stable versions. Therefore, all the WIP must be done in the `development` branch and it will be merged into `main` when everything is working fine.

### Setting up the environment

It requires to install [NodeJS](https://nodejs.org/en/) (version v17.2.0). If NodeJS does come with the [Yarn](https://yarnpkg.com/) package manager already installed, do it manually.
Try to use **yarn** instead of **npm** to avoid conflicts with `yarn.lock` and `package-lock.json` files auto-generated using one or the other, respectively.
You can check that everything works with the following commands (note that the versions can differ from the ones that you have installed):

```shell
$ node --version
v17.2.0
$ yarn --version
1.22.5
```

Then, install the dependencies (including the ones for development) with:

```shell
yarn install --dev
```

### Dealing with the translations

The application supports the four official languages in Spain: Basque, Catalan, Spanish and Galician. The raw translation file is the CSV file `./translations/translations.csv`, which has five columns: the key used in the application to translate to the corresponding language and the translation for that key in each of the four languages.
In the following example we create a tag, `SETTINGS.TITLE`, that will be used later on the web, and it is going to be translated to the selected language.

```csv
KEY,BA,CA,ES,GA
...
SETTINGS.TITLE,Konfigurazioa,Configuració,Configuración,Configuración
```

The idea behind using this centralized CSV file is to avoid inconsistency between translation files, missing translations, non-matching keys, and extra duplicated effort. However, the translations need to be bundled in an appropriate format, in `./translations/build/<LANG>.json` with `<LANG>` being each language code (_BA_, _CA_, _ES_, and _GA_). These files are not tracked by git and will be overwritten if you run the [Python3](https://www.python.org/) script to build the translations:

```shell
$ python3 ./translations/buildTranslations.py
```

In any React component, we can use then the following code to transform the translation key to the corresponding translation in the currently configured language:

```tsx
const { t } = useTranslation('translation')
t('SETTINGS.TITLE')}
```

### Running it in localhost

Once everything is installed, simply run the server with:

```shell
$ yarn dev
```

This will start a local server at `http://localhost:3000/ecoluz/`.

### Checking the production bundled version

There can be some breaking changes with the production bundled version compared to the development one, especially with some TailwindCSS dynamically generated classes. To check that everything is working correctly, build the bundled code (in the `./dist/` folder) and run it to check that everything is still working fine.

```shell
$ Yarn build
$ yarn serve
```

This will start a local server with the production-ready built at `http://localhost:5000/ecoluz/`.
