# Description
Small Town Apparel Co. is an app with a Javascript frontend and Ruby on Rails API backend to celebrate small town merchants across the globe, and catalogue their one-of-a-kind merchandise.

# Installation Instructions
Fork and clone the repo to your local machine.

Change directory into small-town-backend and run:

- cd small-town-backend
- bundle install

# Setup and seed the database:
- rake db:create
- rake db:migrate
- rake db:seed
- Run the rails server from localhost:3000
- rails s

# Navigate to the small-town-frontend

- cd .. small-town-frontend 
- npm start

You should see the app from localhost:3001.

# Usage
- Click on "Create New Merchant" and fill out the form to add a new small town merchant.

- Click on "Create New Item" and fill out the form to add a new item to any existing merchant (via the dropdown menu)

- To see a list of items that a particular merchant has on sale, click on the merchant card. A list of items will populate under the description of the merchant.

- To see more details on any one particular item, click on the item once you are on the merchant page. This is where you can also delete an item from the database.

# MIT License
Copyright (c) [2021] [Nicholas Nobile]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.