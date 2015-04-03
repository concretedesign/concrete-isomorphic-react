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

There are a number of commands accessible through `npm run`:
 - `npm run client`: Start the front-end server with Gulp.  Accessible at [http://localhost:8000](http://localhost:8000).
 - `npm run server`: Start the back-end server (Hapi.js).  Accessible at [http://localhost:3030](http://localhost:3030).
 - `npm run dev`: Run the front-end server and API concurrently.
 - `npm run build`: Build the front-end static assets minifed for production into the `/public` directory.
 - `npm run production`: Run a production build then run server.
 - `npm run deploy`: Build assets and deploy to server by running `node deploy.js` (nothing there for now)

View the server Debug console (care of Hapi's TV plugin): [http://localhost:3030/debug/console](http://localhost:3030/debug/console).

## App structure

```bash
.
├── server.js          # Defines Hapi server; Loads client side routes and defines server-only (e.g. API) routes
├── server.jsx         # Initializes react-router server side
├── routes.jsx         # All client side routes (accessible isomorphically)
│
├── app
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
├── config.js   # Contains global configuration like server ports, database info, etc.
└── Gulpfile.js    # Contains the gulp tasks for the build
```

## Component Structure

Each component should be in its own folder with the following structure:

```bash

└── component-name
   ├── component-name.jsx        # Main react component
   ├── component-name.scss       # Styles particular to this component.  Must be added to /app/styles/app.scss
   └── component-name.jade       # (Optional) Jade template for this component's render method

```