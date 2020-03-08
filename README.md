# EnviroCar_c1_consumption_data
This is a react application powered by react-map-gl and deck.gl to visualise EnviroCar tracks data.

## Status

Visualised all 100 tracks, provided by EnviroCar API on calling "/tracks" route, with color on the basis of their consumption data.

All tracks can be seen in and around:
* Hamm
* Chemnitz
* Bremen

##### Working on wiring up city selector 

### Color Scheme

* [255, 0, 0] i.e. Red for consumption > 4 l/hr
* [255, 128, 0] i.e. yellowish-orange for consumption between 3-4 l/hr
* [255, 255, 0] i.e. yellow for consumption between 2-3 l/hr
* [128, 255, 0] i.e. nearly light-green for consumption between 1-2 l/hr
* [0, 255, 0] i.e. green for consumption < 1 l/hr<br />

#### [0,0,255] i.e. blue for no consumption data

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
