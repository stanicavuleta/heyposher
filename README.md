# heyposher

The marketing app for poshmark

## To run the application directly

You can run the application directly with the following commands

```bash
mkvirtualenv --no-site-packages poshmarvel -p python3
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```

## Installation

Setup a virtualenv and install requirements:

```bash
mkvirtualenv --no-site-packages poshmarvel -p python3
pip install -r requirements.txt
```

## Running server

```bash
./manage.py runserver
```

## Serving front-end

To build JavaScript and CSS files, first install npm packages:

```bash
npm install
```

Then to build (and watch for changes locally) just run:

```bash
npm run serve
```

## Building front-end

To build JavaScript and CSS files, first install npm packages:

```bash
npm install
```

Then to build (and watch for changes locally) just run:

```bash
npm run build
```

