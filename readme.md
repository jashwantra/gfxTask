# Electron app to show data of products; Task given by GFX

This is an desktop app developed using ElectronJS and ReactJS which shows the details of the products as the given table :-

![project demo](https://raw.githubusercontent.com/jashwantra/gfxTask1/main/gfxTask.JPG)

## Question
Question:
Design a system to create a JSON file in the local file system and write the below data into it and
read the file from the file system and render it in a table as given below.

Data:
{
"product_id": 654321,
"title": “Product A”,
"price": "15000.00",
"sku": "1307A 0101000"
}

Final Render (UI):

ID       Product Title    Price(INR)        SKU

654321    Product A        15000.00     1307A 0101000

Required understanding:
Electron, ReactJS, File System, HTML, CSS, JSON

Note: Implement it using Electron Framework for windows/macOS desktop app.

## Getting Started

1. Clone the repository: `https://github.com/jashwantra/gfxTask1.git`
2. Change directory to ui: `cd ui`
3. Install react dependencies for frontend: `npm install`
4. Start the react app: `npm start`
5. Open another terminal and change directory to electronJS: `cd electronJS`
6. Install electronJS dependencies: `npm intall`
7. Start the electronJS application: `npm start`