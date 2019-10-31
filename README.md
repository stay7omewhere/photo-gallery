# Photo Gallery Service

> An app to render a photo gallery for a website's item listing page. It includes a seed script to generate example data.

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Features](#features)
1. [Related Projects](#related-projects)

## Usage

To deploy this service, run a copy of the docker-compose.yml included in the root directory (updating the port mapping as needed). This will pull the image for this app (built from the Dockerfile in the root directory) from Docker Hub, and create a container that runs the server. Once the service is running, open `<URL>/:id` in the browser, changing the id (0-99) to access a variety of examples (for now, URL is hardcoded to `http://3.133.19.147`).

## Requirements

- Node 8.15.1
- Mongo 4.2.0

## API routes

### USE
```
/
/rooms/:id
```
Serves up static files.

### GET
```
/api/rooms/:id/photos/
```
Renders photos of a specific listing.

### POST
```
/api/rooms/:id/save
/api/rooms/:id/share
```
Each route respectivaly saves and shares specific listing to the database.

### DELETE
```
/api/rooms/:id/save
```
Remove a saved listing to be unsaved.

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Features

Features include:
  - A preview of the first few photos in the set
    - arranged in a grid
    - with an on-hover effect that zooms into the photo, and darkens all other photos
    - clicking on a photo brings the user to that point in the carousel
    - clicking on the 'View Photos' button brings the user to the first photo in the carousel
    - clicking the 'Share' button renders a modal that covers the rest of the page, clicking on the 'X' closes it
    - clicking the 'Save' button toggles between a saved (filled heart) and unsaved (empty heart) state
  - A carousel to navigate through the photos
    - clicking on either side of the photo, or the arrow buttons, navigates the user in a loop forwards/backwards through the set
    - clicking the 'X' button closes the carousel and re-renders the preview
    - a description and order number are displayed at the bottom of the photo
    - a 'scrollbar' shows thumbnails (that highlight on hover) of photos in the set, and the user can click on one to navigate directly to that photo

Screenshots of deployed service:

Preview
<img width="826" alt="screenshot1" src="https://user-images.githubusercontent.com/10113718/67626689-d2fe9200-f803-11e9-8e13-af8db45b8bd6.png">

Photo carousel
<img width="827" alt="screenshot2" src="https://user-images.githubusercontent.com/10113718/67626699-f4f81480-f803-11e9-87c9-bb299c1b6a15.png">

Share modal
<img width="827" alt="screenshot3" src="https://user-images.githubusercontent.com/10113718/67626705-13f6a680-f804-11e9-8763-c5d3a66a9b9f.png">

Save button when clicked

<img width="281" alt="screenshot4" src="https://user-images.githubusercontent.com/10113718/67631024-e9c9d680-f84d-11e9-80c6-9f676083bf07.png">

Photos in this project are from the following Airbnb listings:

  - https://www.airbnb.com/rooms/10201545
  - https://www.airbnb.com/rooms/3993887
  - https://www.airbnb.com/rooms/32694
  - https://www.airbnb.com/rooms/1083329
  - https://www.airbnb.com/rooms/1415908

## Related Projects

  - https://github.com/O2znz/checkout
  - https://github.com/O2znz/reviews
  - https://github.com/O2znz/recommendations
  - https://github.com/O2znz/experiences
  - https://github.com/O2znz/angelique-proxy (proxy server that renders this service and the services listed above)
