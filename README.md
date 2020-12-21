# mono-webapp

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
