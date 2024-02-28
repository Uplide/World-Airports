# World Airports Map

This project displays airports around the world on a map using Leaflet.js and Express.js.

## Usage

1. **Clone the project:**

    ```bash
    git clone https://github.com/Uplide/World-Airports.git
    ```

2. **Install dependencies:**

    ```bash
    cd World-Airports
    npm install
    ```

3. **Start the server:**

    ```bash
    npm start
    ```

4. **Open your web browser and go to [http://localhost:3000](http://localhost:3000).**

## Project Structure

- `public/index.html`: HTML file containing the Leaflet map setup and JavaScript code to fetch airport data.
- `index.js`: Express.js server to serve the HTML file and airport data.
- `airports.json`: JSON file containing airport data.

## Data Sources

The airport data is sourced from the `airports-GB.json` file, which contains information about airports around the world.

## Dependencies

- [Leaflet](https://leafletjs.com/): A JavaScript library for interactive maps.
- [Express](https://expressjs.com/): A web application framework for Node.js.

## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
