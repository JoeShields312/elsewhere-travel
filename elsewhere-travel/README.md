# Elsewhere
A responsive, static AI travel-planning landing-page prototype. No dependencies, backend, authentication, or booking APIs.

## Run
From this directory run `python3 -m http.server 8080 --directory dist` and visit http://localhost:8080.

The editable form scrolls to a clearly labeled fixed Chicago–Munich mock itinerary. Five accessible, keyboard-navigable tabs show each day's activities and practical details. Form values are reflected in the sample notice, not used to simulate AI generation.

Assets are served locally. Fonts load from Google Fonts with Georgia/Arial fallbacks. Motion respects reduced-motion preferences.

## Image attribution
Munich panorama: Muck, [Alter Peter-03-Panorama](https://commons.wikimedia.org/wiki/File:Alter_Peter-03-Panorama.jpg), Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Local image resized and displayed cropped; the image derivative retains CC BY-SA 4.0.

## Sample research
- Airport transport: https://www.munich-airport.com/public-transport-260822
- Viscardigasse memorial: https://www.publicartmuenchen.de/en/projekte/arguments/
- Asamkirche: https://www.munich.travel/en/pois/urban-districts/asamkirche

## Validation
JavaScript syntax and local asset/anchor references checked. Supported browser preview tooling was unavailable, so desktop/mobile rendering and live browser interaction checks remain unperformed.

## Discovery card photography
All five daily discovery cards use locally hosted photos with text overlays. Responsive crops, credit links, and descriptive alt text change with the selected day.
- Wilfredor: https://commons.wikimedia.org/wiki/File:Courtyard_of_the_Neues_Rathaus_in_Munich.jpg — CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/). Resized and compressed; displayed with responsive crop. Border trimmed. Derivatives retain their source license.
- dom fellowes: https://commons.wikimedia.org/wiki/File:Viscardigasse_(16920849306).jpg — CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Resized and compressed; displayed with responsive crop. Border trimmed. Derivatives retain their source license.
- Rufus46: https://commons.wikimedia.org/wiki/File:Hirschau_Englischer_Garten_Nordteil_Muenchen-1.jpg — CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Resized and compressed; displayed with responsive crop. Derivatives retain their source license.
- Yelkrokoyade: https://commons.wikimedia.org/wiki/File:Spiegelsaal,_Amalienburg,_Park_Schloss_Nymphenburg.jpg — CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Resized and compressed; displayed with responsive crop. Derivatives retain their source license.
- Sumit Surai: https://commons.wikimedia.org/wiki/File:Asamkirche_-_Munich_-_Interior.jpg — CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Resized and compressed; displayed with responsive crop. Derivatives retain their source license.

## Closing banner
Lake Eibsee panorama by Tiia Monto: https://commons.wikimedia.org/wiki/File:Eibsee_-_panorama.jpg — CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/ . Resized and responsively cropped. Image derivative retains CC BY-SA 4.0.
