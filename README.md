# Application State with Redux
- Virtual Store Phase 1: For this assignment, you will be starting the process of creating an e-Commerce storefront using React with Redux, coupled with your live API server
- Continue work on the e-Commerce storefront, breaking up the store into multiple reducers and sharing functionality/data between components.
- Connect the Virtual Store to an API to retrieve live data from your data source, using thunk to enable asynchronous actions.
- Complete work on the Virtual Store by adding detail pages for individual products as well as the the cart checkout page.


***Phase 1***
- Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

- The following user/developer stories detail the major functionality for this phase of the project.

    - As a user, I expect to see a list of available product categories in the store so that I can easily browse products
    - As a user, I want to choose a category and see a list of all available products matching that category
    - As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

***Phase 2***
- In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

- The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

    - As a user, I want to choose from products in the list and add them to my shopping cart
    - As a user, I want to see the products that I’ve added to my shopping cart so that
    - As a user, I want to change the quantity of items I intend to purchase in my shopping cart
    - As a user, I want to be able to remove an item from my shopping cart

***Phase 3***
- We will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

- The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

    - As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
    - As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

***Phase 4***
- In phase 4, we will be completing work on our Virtual Store by adding a two full page views to the application: Product Details and Checkout

- The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

    - As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
    - As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered

## Application Flow

- User sees a list of categories
- Chooses a category and sees a list of products
- Clicks the “Add to Cart” button on any product
- Clicks the “Cart” link in the header
- Sees a list of all products in the cart
- Clicks the delete button on an item and sees the item removed
- Changes the quantity selector on an item and sees the cart total change

## Notes on constructing the Redux Store:
***Categories***
- State should contain a list of categories as well as the active category
     - Each category should have a normalized name, display name, and a description
- Create an action that will trigger the reducer to change the active category
- Update the active category in the reducer when this action is dispatched

***Products***

- State should be a list of all products
    - Each product should have a category association, name, description, price, inventory count
- Create an action that will trigger when the active category is changed
    - HINT: Multiple reducers can respond to the same actions
    - Create a reducer that will filter the products list based on the active category

***Active Category***

- State should store active category
    - Other components (products, etc) might need to reference this