# Concrete Isomorphic React Boilerplate

A boilerplate project for isomorphic react.js + hapi.js using gulp and browserify.

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

There are a number of commands accessible through `npm run`:
 - `npm run client`: Start the front-end server with Gulp.  Accessible at [http://localhost:8000](http://localhost:8000).
 - `npm run server`: Start the back-end server (Hapi.js).  Accessible at [http://localhost:3030](http://localhost:3030).
 - `npm run dev`: Run the front-end server and API concurrently.
 - `npm run build`: Build the front-end static assets minifed for production into `/public`.
 - `npm run production`: Run a production build then run server.
 - `npm run deploy`: Build assets and deploy to server by running `node deploy.js` (TODO)

View the server Debug console (care of Hapi's TV plugin): [http://localhost:3030/debug/console](http://localhost:3030/debug/console).

## App structure

```bash
.
├── server.js          # Defines Hapi server; Loads client side routes and defines server-only (e.g. API) routes
├── server.jsx         # Initializes react-router server side
├── routes.jsx         # All client side routes (accessible isomorphically)
│
├── app
│   ├── admin/         # Rest API admin interface (based on ng-admin).  Accessible server-side.
│   ├── assets/        # Static assets and CSS (Sass) that is compiled or copied into /public
│   │   ├── img        # Images copied into /public.  Web-accessible from /img/filename.ext
│   │   └── styles     # Sass files compiled into app.scss.  Only global styles should go here, others are included with component
│   ├── components/    # React's components container.  See below for component structure.
│   │   ├── layouts/   # Main container template (usually only need one).  Like a rails application layout
│   │   ├── pages/     # Page templates
│   │   ├── partials/  # Templates that are always included in others (e.g. header, footer, sidebar)
│   │   └── ui/        # UI elements (this is the bulk of the app)
│   ├── utils/         # Helper scripts and other (generally non-react) scripts
│   ├── vendor/        # Vendor scripts (try to keep empty and use browserify modules)
│   ├── app.js         # Entry point for the app when using gulp
│   ├── index.html     # Loaded when using gulp (keep in sync with index.jsx)
│   └── index.jsx      # Loaded server-side (keep in sync with index.html)
│
├── public             # Container for the static files.
│
├── config.js          # Contains global configuration like server ports, database info, etc.
└── Gulpfile.js        # Contains the gulp tasks for the build
```

## Component structure

Each component should be in its own folder with the following structure:

```bash

└── component-name
   ├── component-name.jsx        # Main react component
   ├── component-name.scss       # Styles particular to this component.  Must be added to /app/assets/styles/app.scss
   └── component-name.jade       # (Optional) Jade template for this component's render method.  Must be handled by .jsx file

```

## Using the component generator

The easiest way to create a component is to use the Yeoman generator.  It creates files in the right place and automatically adds your Sass to app.scss

```bash
npm install -g yo                               # Install Yeoman
npm install -g generator-concrete-component     # Install our generator
yo concrete-component                           # Run the generator (*in the project root!)
```