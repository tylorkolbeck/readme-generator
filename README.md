# CLI Readme Generator

## Description

This CLI tool takes input and generates a Readme template to use on your github projects. If you run it with github OAuth you can also get the user email to include in the readme.

## Install

```sh
npm i
```

## How To Use

### Set Up Personal Access Token

Create a .env file and add your user token

```sh
USER_TOKEN=<YOUR AUTH TOKEN>
```

### Run

```sh
npm run start
```

## Use

You will be prompted with questions which will be used to generate the markdown file. Some questions have default answers so you can just hit enter to accept the default.

The readme will be generated and then put into the /readme_files directory. It will be named by what you input to the Title question of the question prompts. If you do not provide a title then the readme will be named with a timestamp.

## Example Usage

![](assets/gif1.gif)

![](assets/gif2.gif)
