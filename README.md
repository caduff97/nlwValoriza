# NLW Valoriza

Its a backend platform for create user, default tags and custom compliments.

Where users can send compliments to each other, with an additional message.

## Requirements

Must have **yarn** package manager, **PostgreSQL** and **Git** installed in your machine.

## Installation

Clone the package to one directory in your machine

```bash
git clone https://github.com/caduff97/nlwValoriza
```

Install all dependencies

```bash
yarn
```

Access the file **ormconfig.json** and set your PostgreSQL host, port, username, password and database.

## Usage

Run in development mode

```bash
yarn dev
```

## Rules

- Users

  [ x ] Users with the same name are not allowed.

  [ x ] All users must have email.

- Tags

  [ x ] The tag must have a name.

  [ x ] Tags with the same name are not allowed.

  [ x ] Tags must only be created by admin users.

- Compliments

  [ x ] It's forbidden a user create a compliment for yourself.

  [ x ] The user that's receive the compliment must exists.

  [ x ] The user must be authenticated.
