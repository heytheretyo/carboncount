# Carboncount

Carboncount is a desktop application made for tracking your computer's carbon usage. Note: it is only available for Windows.

![Thumbnail](assets/thumbnail.png)

# Installation

Please check the release tab to install the application

## Development Setup

### Requirements

- Python 3
- Node
- virtualenv

<br>

```bash
yarn run init
```

This will create a virtual environment, install pip and Node dependencies. Alternatively you can perform these steps manually.

```bash
yarn install
pip install -r requirements.txt
```

On Linux systems installation system makes educated guesses. If you run KDE, QT dependencies are installed, otherwise GTK is chosen. `apt` is used for installing GTK dependencies. In case you are running a non apt-based system, you will have to install GTK dependencies manually. See [installation](https://pywebview.flowrl.com/guide/installation.html) for details.

## Usage

To launch the application.

```bash
yarn run start
```

To build an executable. The output binary will be produced in the `dist` directory.

```bash
yarn run build
```

To start a development server (only for testing frontend code).

```bash
yarn run dev
```

To clean the developement environment, this will delete `gui`, `dist`, `build` directories.

```bash
yarn run clean
```

To eject create-react-app and tweak the configuration as you may wish.

```bash
yarn run eject
```

To test the frontend code if you have written tests.

```bash
yarn run frontend:test
```
