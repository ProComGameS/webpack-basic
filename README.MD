# Simple Webpack Project

This project demonstrates how to configure Webpack to include the following functionalities:
- **File name hashing** to prevent browser caching issues.
- **Support for local fonts** to ensure proper text rendering.
- **Image handling** for asset management.
- **CSS integration** to style your application.
- **Optimized external libraries** to reduce bundle size and improve performance.

---

## Prerequisites

Before starting, make sure you have:
- [Node.js](https://nodejs.org) (version 14+)
- [Git](https://git-scm.com)

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repository-name>.git

Navigate to the Project Directory:
```
 cd <your-repository-name>
```

Install Dependencies:
```
npm install
```

Build the Project:
```
npm run build
```

## How to Use
Open the Project in Your Browser:

After running `npm run build`, all files will be generated in the ``dist`` folder.

## Project Structure
```
/src
├── index.js         # Main JavaScript file
├── styles.css       # CSS styles
├── /fonts           # Local fonts
├── /images          # Images
└── index.html       # HTML template
webpack.config.js    # Webpack configuration file
package.json         # Dependencies and scripts
.gitignore           # Git ignore rules
```

