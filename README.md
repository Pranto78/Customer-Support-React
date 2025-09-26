1. What is JSX, and why is it used?
2. What is the difference between State and Props?
3. What is the useState hook, and how does it work?
4. How can you share state between components in React?
5. How is event handling done in React?

Answer Part:

---

1. JSX is a syntax extension for JavaScript that looks similar to HTML but is used inside React to describe what the UI should look like. Also it is a javascript XML.

JSX is used in React because it makes the process of creating user interfaces simpler and more readable. It allows developers to write HTML like syntax directly inside JavaScript so the structure and logic of a component stay together. This makes the code easier to understand, maintain, and work with, while still being converted into JavaScript that React can use behind the scenes.

---

2. State: (i) State can be updated using setState (class components) or useState (functional components).
   (ii) Each component manages its own state privately.
   (iii) Updating state causes the component (and its children) to re-render.
   (iv) Defined inside the component and can be changed during the component’s lifecycle.
   (v) Best for handling things like form inputs, toggle buttons, API responses, etc.

   Props: (i) Props cannot be changed by the child component receiving them.
   (ii) Data is passed from parent to child (one-way data flow).
   (iii) Only changes when the parent re-renders and passes new props.
   (iv) Child components can only use props but cannot modify them.
   (v) Best for passing data, functions, or configurations down the component tree.

---

3. useState is a special React tool (called a hook) that lets functional components have their own memory of data.

   It provides two things:

          (i) The current value of the state.

         (ii) A function you can call to change that value.

When you update the state with this function, React refreshes the component to show the new value.

---

4. 
Pass through props => A parent can pass its state down to children.

Callback functions => A parent can also give a function to a child so the child can update the parent’s state.

Lifting state up => If two components need the same data, move the state to their closest common parent, then distribute it through props.

---
5. 
-> React uses a similar approach to normal browser events, but with some differences.

-> Event names use camelCase (like onClick instead of onclick).

-> Instead of writing event logic inside HTML, you give React a function that runs when the event happens.

-> React also uses something called Synthetic Events, which are wrappers around native browser events. This makes events work the same way across different browsers.
