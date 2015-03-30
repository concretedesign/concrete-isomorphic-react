# Concrete Isomorphic React Boilerplate

A boilerplate project for isomorphic react.js + hapi.js using gulp and browserify

### Setup

```bash
# Clone the repository
git clone https://github.com/concretedesign/concrete-isomorphic-react.git

# Install dependencies
cd concrete-isomorphic-react
npm install

# Run the development server
npm run dev
```

View the server Debug console (care of Hapi's TV plugin): http://localhost:3030/debug/console

There are a number of commands accessible through `npm run`:
 - `npm run client`: Start the front-end server with Gulp
 - `npm run server`: Start the API server (Hapi.js)
 - `npm run dev`: Run the front-end server and API concurrently
 - `npm run build`: Build the front-end static assets and copy into the Hapi.js /public directory
 - `npm run production`: Run API server, copying static assets into /public
 - `npm run deploy`: Build assets and deploy to server by running `node deploy.js` (nothing there for now)


## App structure (FIXME)

```bash
.
├── app.js         # Run the express server
│
├── server.jsx     # Send the server-rendered HTML document as response
├── client.jsx     # Entry point for the browser: mounts the <App /> component on document.body.
├── routes.jsx     # Define the react-router handlers
│
├── cachebuster.js # Used by express in production for serving cache-busted URLs
│
├── components     # React's components container
│   ├── App.jsx    # The App component where the routes are mounted
│   ├── Html.jsx   # Renders the whole HTML document server side (via server.jsx)
│   ├── Index.jsx  # The "index" route (as example)
│   └── Place.jsx  # The "place" route (as example)
│
├── style           # Container for .scss files
│
├── public          # Container for the static files. Cache-busted on build.
│
├── scripts
│   ├── dev        # Useful scripts to run the development server
│   └── prod       # ...or to test the production server
│
├── dev-tools.js   # Runs the webpack dev server, livereload, and watches for .scss changes
├── gulpfile.js    # Contains the gulp tasks for the build
│
├── webpack.config.js          # Webpack config for the build task
└── webpack.config.dev.js      # Webpack config for development

```

## Component Structure (FIMXE)

Each component should be in its own folder with the following structure:

```bash

└── component-name
   ├── component-name.jsx        # Main react component
   ├── component-name.scss       # Styles particular to this component
   └── component-name.jade       # (Optional) Jade template for this component's render method

```