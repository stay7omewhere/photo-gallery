# Photo Gallery Service

> An app to render a photo gallery for a website's item listing page. It includes a seed script to generate example data.

Features include:
  - A preview of the first few photos in the set
    - arranged in a grid
    - with an on-hover effect that zooms into the photo, and darkens all other photos
    - clicking on a photo brings the user to that point in the carousel
    - clicking on the 'View Photos' button brings the user to the first photo in the carousel
    - clicking the 'Share' button renders a modal that covers the rest of the page, clicking on the 'X' closes it
  - A carousel to navigate through the photos
    - clicking on either side of the photo, or the arrow buttons, navigates the user forwards/backwards through the set
    - clicking the 'X' button closes the carousel and re-renders the preview

## Related Projects

  - https://github.com/O2znz/checkout
  - https://github.com/O2znz/reviews
  - https://github.com/O2znz/recommendations
  - https://github.com/O2znz/experiences
  - https://github.com/O2znz/angelique-proxy (proxy server that renders this service and the services listed above)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To deploy this service, run a copy of the docker-compose.yml included in the root directory (updating the port mapping as needed). This will pull the image for this app (built from the Dockerfile in the root directory) from Docker Hub, and create a container that runs the server. Once the service is running, open `<URL>/:id` in the browser, changing the id (0-99) to access a variety of examples (for now, URL is hardcoded to `http://3.133.19.147`).

## Requirements

- Node 8.15.1
- Mongo 4.2.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

