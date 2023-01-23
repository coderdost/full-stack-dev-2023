
# FULL STACK COURSE 2023

  

Hi, This is **CoderDost Youtube Channel** Full Stack Development Course [Course Link ](https://youtube.com/coderdost),

  

You can **download code** from here via :

1. Git Commands

- use `git clone <repository_url>`

- checkout branch according to video `git checkout react-1`

- run `npm install` inside the root directory before running the code

  

2. If you are not comfortable with git, directly download the branch as Zip.

- Choose branch related to the Video e.g. `react-1`

- run `npm install` inside the root directory before running the code

  
  

# React JS Series

  
  

## Video 1 - Introduction to React & Setup

  

- **Assignment 1** : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

- **Assignment 2** : If we delete `node_modules`. How to run our app again successfully ?

- **Assignment 3** : How to remove double `console.logs` from React ? [ it is not needed in real life to remove them, its just an assignment problem ]


### Related Videos :
1. De-structuring Assignment : [Long Video](https://youtu.be/sNhqFofQhFs) |  [Object De-structure Short Video](https://youtube.com/shorts/H3MKXE69_c8) | [Array De-structure Short Video](https://youtube.com/shorts/ONGyMq49kZY)
2. Import/Export :  [Long Video](https://youtu.be/7P5JUMc1cI4) |  [Short Video](https://youtube.com/shorts/sUUOSWlwfM8)







## Video 2 -   Components - JSX and Props

 

- **Assignment 1** : Create a Parent Component called **Border** which can provide some CSS border to any component nested into it. [Hint : You will need to use `children` props here
   < Border> 
         < Component > 
   < Border />

- **Assignment 2** :  Create a simple React app for **RESUME Builder**. It will be static website. You have to make components like **Resume** as top level and under it - **Skills**, **Education**, **Experience** etc as components.  All resume data will be under 1 big JavaScript object like which you can us in components via props. You can fix the number of items in **Skills**, **Education**, **Experience** or any section. Example you can say that only 3 experience items is allowed.

``` 
   resume = {
      experience : [ { year:2012, company:'xyz', role:'something' }],
      education:[ ],
      skills : [ 'react js', 'node js']
      .....
      ...
      }
```

 > You can choose any simple HTML layout and convert it to React Components 
 
 Example Link : [ Resume HTML ](https://codepen.io/emzarts/pen/OXzmym)




### Related Videos :
1. De-structuring Assignment : [Long Video](https://youtu.be/sNhqFofQhFs) |  [Object De-structure Short Video](https://youtube.com/shorts/H3MKXE69_c8) | [Array De-structure Short Video](https://youtube.com/shorts/ONGyMq49kZY)
2. Import/Export :  [Long Video](https://youtu.be/7P5JUMc1cI4) |  [Short Video](https://youtube.com/shorts/sUUOSWlwfM8)
3. Spread Operator : [Long Video](https://youtu.be/X4Iv0TBHDQ4) | [Short Video](https://youtube.com/shorts/5dBZGyXutx8)


## Video 3 -   Conditional Rendering & Lists

 
- **Assignment 1** : Make a simple component which can conditionally render a list with **number** or **alphabets** or ***bullets*** in HTML for number. e..g. use a prop like `layout` for this. Also use a prop `items` for array of items in list.
```
< List layout="numbered" items={items}/> 
< List layout="alpha"  items={items}/> 
< List layout="bullet"   items={items}/>
```

- **Assignment 2** :  This is continuation of 2nd assignment in Video-2 **RESUME Builder**.
1. In this part you have to make some conditional rendering. Suppose if any section doesn't exist you have to remove that section from **Resume**. Example if `skills` is empty array than don't display `skills` section in Resume.
2. You have to use `map` in most places where there are arrays. Like **Skills**, **Education**, **Experience** if there are 3 entries, use `map` to display 3 experience items. You don't need fix number of items. Any array can have 1 to 10(or some Limit) any number of items. You can put some Limit, so that your layout is not affected.
3. Conditionally put some styling to **Resume**. Like `light` theme or `dark` theme or any other way you can switch the CSS layouts.

``` 
   resume = {
      experience : [ { year:2012, company:'xyz', role:'something' }],
      education:[ ],
      skills : [ 'react js', 'node js']
      .....
      ...
      }
```

 > You can choose any simple HTML layout and convert it to React Components 
 
 Example Link : [ Resume HTML ](https://codepen.io/emzarts/pen/OXzmym)




### Related Videos :
1.  Ternary Operator : [Video](https://youtu.be/F_95TPUIA2c)
2.  Logical AND (&&) : [Video](https://youtu.be/7dXLYWWTRXI)
3.  Higher Order functions (map, filter, reduce) : [Video](https://youtu.be/oGpA98nNx6Y)
4. Import/Export :  [Long Video](https://youtu.be/7P5JUMc1cI4) |  [Short Video](https://youtube.com/shorts/sUUOSWlwfM8)

