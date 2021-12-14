# Qualitative Project
## The Colors of Dorothy Wright Liebes

## Research

Searching the Cooper-Hewitt’s collection of textile, I was inspired by the early 1900's American textile designer, Dorothy Wright Liebes. She was a handweaver who designed textiles for many famous architects including Frank Lloyd Wright.
Using bold color combos and emphasizing texture she opened two studios in her lifetime. She was a leader in the production of textiles through America’s industrialization. 

I wanted to analyze the colors used in all of Liebes’ sample card textiles at the Cooper Hewitt. I wanted to take a closer look at the way her art progressed over the years of her career. Because she was a leader in textile industrialization, I wanted to see if her color palette changed over the years.
Ultimately, I created a palette site for people to get color inspiration.

## Sketches

<img width="482" alt="Screen Shot 2021-12-14 at 11 01 08 AM" src="https://user-images.githubusercontent.com/48970337/146034388-6b94348c-9c6c-4a74-9be9-8b11d2e81df3.png">

<img width="484" alt="Screen Shot 2021-12-14 at 11 01 16 AM" src="https://user-images.githubusercontent.com/48970337/146034397-183a0080-6ef9-499d-80de-43e618e0a9a0.png">

I had many chart variation ideas for this project, but both did not seem to be appropriate for the data.

## Process

Each sample card image was individually downloaded from collections.si.edu and I hand tagged four HEX color codes per image. I decided against using a library to pick the colors because I wanted it to be more accurate and to not include the background color. 

The sample card images are sorted by date and include a color palatte.

Tech used: HTML, CSS, javascript, d3.js, MacOS Digital Color Meter

### index.html

html file to host the introduction, script to append the images from file.

### app.js

reads the data file data.json to parse out the HEX codes, image files, and dates to append them to the DOM.

## Project

### https://jcraig13.github.io/MajorStudio1/QualitativeProject/

![Screen Shot 2021-12-14 at 11 18 35](https://user-images.githubusercontent.com/48970337/146037271-b23d2df8-7cfc-4b43-b2d0-4a8a05fe3cbe.png)

![Screen Shot 2021-12-14 at 11 18 43](https://user-images.githubusercontent.com/48970337/146037281-ab3bcee7-c671-4834-b09d-338acb406df5.png)

![Screen Shot 2021-12-14 at 11 18 53](https://user-images.githubusercontent.com/48970337/146037294-c1d1a1ef-0c4b-4ffe-98db-f81312d3b37e.png)

![Screen Shot 2021-12-14 at 11 18 59](https://user-images.githubusercontent.com/48970337/146037302-058c50c4-5af9-42e2-806b-f8f38e6eea58.png)

## Future for this project

I think this project can be improved by adding tooltip descriptions of the materials used for each sample card because I have gathered that data. I also want to append a HEX code text attribute to each color swatch, it would make this site more useful. Finally, I would like to add a sorting feature where you can find contrasting palattes, sequential palattes, etc.
