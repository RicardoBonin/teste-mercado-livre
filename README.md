# Mercado Livre APP

## Description

This is a technical challenge that will assess the candidate's React development skills by creating a web application to list and display product details consuming two distinct APIs.

### Instructions:

1. Use React to develop the application.
2. The APP has three pages: the home page with only the header, one to list all products, and another to display the details of a specific product.

## Clone and Install Repository Dependencies

You need to **verify if your development environment is following the following parameters**:

1. Have `Node.js` version `v20.11.0`;
   - It is recommended to install via the `Node.js` manager, [NVM](https://github.com/nvm-sh/nvm)
2. Have `Yarn` version `1.22.17`.
   - [Tip to change `Yarn` version if you already have it installed](https://yarnpkg.com/cli/set/version)

If meeting these criteria, just follow these steps to clone and run the project:

1. Clone the repository and enter its folder:

```bash
git clone git@github.com:RicardoBonin/teste-mercado-livre.git && cd teste-mercado-livre
```

2. Run the following command to install project dependencies:

```bash
yarn
```

3. Finally, run the command below to open the local `preview` of the project:

```bash
yarn dev
```

## Unit Tests

The project has some unit tests, Jest and React Testing Library were used to perform interface tests.

To run them, simply run the following command:

```bash
yarn test
```

## Conventional Commits Pattern

We use the Conventional Commits Pattern as the commit standard. It's not possible to make commits without this pattern. We use Husky to enforce this control.

Here is the link with the patterns:

[Conventional Commits Pattern](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657)

# Pages

- https://teste-mercado-livre.vercel.app/
- https://teste-mercado-livre.vercel.app/items?search=iphone
- https://teste-mercado-livre.vercel.app/items/MLA1392778159

# API routes

- https://teste-mercado-livre.vercel.app/api/items/MLA1379378617
- https://teste-mercado-livre.vercel.app/api/items?q=apple

### Responsiveness

We maintain responsiveness for devices from 360px onwards.

### Hosting

Vercel was used as the hosting for the app. Below are the app links:

### CI/CD

A pipeline was also added to the app that checks for any lint, test, and TypeScript problems before merging to the main branch. If there are any problems, the merge is blocked.
