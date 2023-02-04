

# FULL STACK COURSE 2023

  

Hi, This is **CoderDost Youtube Channel** Full Stack Development Course [Course Link ](https://youtube.com/coderdost),

  ### How to use this code :

You can **download code** in 2 ways  :

1. **Git Commands**

- use `git clone <repository_url>`

- checkout branch according to Chapter number `git checkout react-1`

- run `npm install` inside the root directory before running the code

  

2. If you are not comfortable with git, directly **download the branch as Zip**.

- Choose branch related to the Chapter e.g. `react-1`

- run `npm install` inside the root directory before running the code

  
  

# React JS Series

  
  

## Chapter 1 - Introduction to React & Setup

  

- **Assignment 1** : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

- **Assignment 2** : If we delete `node_modules`. How to run our app again successfully ?

- **Assignment 3** : How to remove double `console.logs` from React ? [ it is not needed in real life to remove them, its just an assignment problem ]


### Related Videos :
1. De-structuring Assignment : [Long Video](https://youtu.be/sNhqFofQhFs) |  [Object De-structure Short Video](https://youtube.com/shorts/H3MKXE69_c8) | [Array De-structure Short Video](https://youtube.com/shorts/ONGyMq49kZY)
2. Import/Export :  [Long Video](https://youtu.be/7P5JUMc1cI4) |  [Short Video](https://youtube.com/shorts/sUUOSWlwfM8)







## Chapter 2 -   Components - JSX and Props

 

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


## Chapter 3 -   Conditional Rendering & Lists

 
- **Assignment 1** : Make a simple component which can conditionally render a list with **number** or **alphabets** or ***bullets*** in HTML for number. e..g. use a prop like `layout` for this. Also use a prop `items` for array of items in list.
```
< List layout="numbered" items={items}/> 
< List layout="alpha"  items={items}/> 
< List layout="bullet"   items={items}/>
```

- **Assignment 2** :  This is continuation of previous assignment **RESUME Builder**
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


## Chapter 4 -  Events && Event Bubbling

 
- **Assignment 1** : Make a simple page with 1 Image, 1button, 1 form Input text box and try to apply these events .

	-	Image : **onMouseOver** : when you hover on image. Image should increase in size. Think of any way where you can do it. Also, try that when you "move out" the mouse, it should be back to normal size.
	-	Button  : **onDoubleClick**: when you doubleClick a button. show some alert box. Also make a console.log for single click event. Is console.log printed twice on double click ? check this ?
	-	Input Textbox : **onFocus**, **onBlur** are 2 events which occur when you enter or exit an input text box by click of mouse etc. Use it to display some console.log, which print "focused on the textbox", "out of textbox".
	-  **onCopy, onCut, onPaste** are 3 events which you can use on any text value etc. try to use it on a paragraph and just alert the user that something is copied, cut or pasted.
	
- **Assignment 2** : Make a custom event called **onClose**. this event should close the current browser tab. you can apply it to a button on click or anywhere.

- **Assignment 3** : Using **event bubbling** concept print the name of Parents to Child of any clicked element. It should be order in "GrandParent >Parent > Child" this kind of order. Where "Child" represents the current clicked element.

- **Assignment 4** : Make a form using `` < Form> `` tag and put an textbox and button inside this form. try to click the button after entering into textbox. Does form reloads ? Can you try to stop is using `e.preventDefault`. Try it.

- **Assignment 5** : use an Input Textbox : after you enter some text. try to press **ENTER** button and show the an alert or console.log. You can capture the **onKeyPress** event, button how you will you make it work only for "Enter" ? It should not work on pressing of other keys. [*Hint: Explore the synthetic event object* ]


- **Assignment 6** :  This is continuation of previous assignment **RESUME Builder**.
1. Add a **print** button to print the current resume. You can use a DOM method ``window.print`` to print the PDF.


- **Assignment 7** : Can you try the challenge of passing the function in one Prop like `onPlay` and the message inside that function to be accessed from other prop `message` [ As shown in Chapter Video ]


### Related Videos :


## Chapter 5 -  State, useState Hooks





## Chapter 6 -  Form , Synthetic Event Object & Lifting State up

**Assignment 1** : Try this challenge : https://beta.reactjs.org/learn/state-a-components-memory#challenges


- **Assignment 2** : **FILTERED LIST** : Make a **List** of something using an Array (a list can of cricket player /countries/ movie name etc). Now make this list it searchable, you have to put a **input textbox** at top of list. When you type in **textbox** it should only show you items matching from text typed. For example - 
If you type only "in" it should show things like  "India" / "China" as both have `in` in it. 
- **Assignment 2.1** : **FILTERED LIST** : Make above **List** as separate components for List, Input form and pass the states from each other using concepts learnt till now.

- **Assignment 3** : **KEYBOARD BASED LIST** : Make a  simple **List** from an input textbox. 

	- There should be no buttons, we will use only keyboard actions 
	- use **ENTER** to add a new item.
	- when you click on an item, it should be selected (you can change style to show it is selected)
	- If you press the **DELETE** key on the keyboard after selecting the list item it should delete that list item. If you have not selected any item the last item should be deleted.
	- You can select list item and press **UP** arrow key to Move It Up. And you can press the **DOWN** key to move it down.

**Assignment 4** :

 This is continuation of previous assignment **RESUME Builder**. Now you have to make a separate component which has a **FORM**. This form will have many **input boxes**. Each one related to one section. For example you can have one input box or **experience** section. Another input box for **skill** section and like this. Every input box should have an **Add** button in front of it. Once you press this add button that information is stored in the state , which you can update  at top of the App level. Now this state should update the **Resume** you have built.
-  first component will be your **RESUME**  document which is only for reading purpose.
- second component will be this **FORM** 
- you have to manage the state in between 
- only Add functionality is required in this assignment
- you can change input boxes according to your need depending on your format of Resume. You can have multiple textboxes also for same section. Like for date + experience item etc.



## Chapter 7 -   More state & useEffect hooks


**Assignment 4** :

 This is continuation of previous assignment **RESUME Builder**. 
-  Add functionality to **delete** the items from resume.
- Add functionality to **update** the items from resume.
- you have to manage the state in between 
- you can change input boxes according to your need depending on your format of Resume. You can have multiple textboxes also for same section. Like for date + experience item etc.
- Check the output can be printed perfectly in PDF.


## Chapter 8 -  useReducer

**Assignment 1** : Try this challenge : https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#challenges



## Chapter 9 -   Context API & useContext

**Assignment 1** : Try this challenge : 
https://beta.reactjs.org/learn/passing-data-deeply-with-context#challenges




## Chapter 10 -   Context API with useReducer [Redux architecture]


## Chapter 11 -   useRef

**Assignment 1** : Try this challenge: 

https://beta.reactjs.org/learn/referencing-values-with-refs#challenges

**Assignment 2** : Try this challenge:  
https://beta.reactjs.org/learn/manipulating-the-dom-with-refs#challenges

## Chapter 12 -   useEffect and API calling

**Assignment 1** : Try this challenge : 

https://beta.reactjs.org/learn/synchronizing-with-effects#challenges
**Assignment 2** : Try this challenge : 

https://beta.reactjs.org/learn/removing-effect-dependencies#challenges

**Assignment 3** : Try this challenge : 
https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks#challenges

## Chapter 13 -   Memoization - useMemo, useCallback, memo

## Chapter 14 - Advanced React - Part 1

## Chapter 14 - Advanced React - Part 2
