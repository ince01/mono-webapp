# mono-webapp

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

This project is a monorepo with 2 packages, include the `ant-ui` - common UI component library and the `next-admin` - web-app consume this UI library.

## Setup development

For start development `next-admin` web-app, you must install dependencies and build common UI component library `ant-ui`.
To do this run the following commands below:

```
yarn install
yarn workspace ant-ui build
yarn workspace next-admin start
```

## ESlint

> Only one .eslintignore file can be used at a time, so .eslintignore files other than the one in the current working directory will not be used.

For ignoring files when run `lint` in root check please add glob pattern indicating which paths should be omitted from linting into `.eslintignore` file at the root path.

Example:

```json
# Global ignore
**/node_modules/**
**/.git/**
**/.yarn/**
**/.husky/**
**/dist/**
**/coverage/**
**/build/**
**/lib/**
**/public/**
**/cypress/**

# Project scope ignore
shared/ant-ui/example/**
```
