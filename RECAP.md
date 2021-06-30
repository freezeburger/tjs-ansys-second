# ReactJS

# ReactJS Tools

* https://www.npmjs.com/package/generate-react-cli

# ReactJS

> Component Based UI JavaScript Library
> ReactJS is a Browser Side Library ( No Need For a Web Server )

* Component 
    * Isolation
    * Composability
    * UI Unit
* JavaScript Library
    * Non Opiniated Code Structure !!!!! 

# Component 

> Can be created in two flavours...

* `class` -> Easy to follow the lifecycle
* `function` -> More Simple and faster - Need Hooks to get `state` and `life cycle`

# Component  LifeCycle

> Sequential Steps from instanciation to DOM insertion and removal

1. **Creation** `constructor`
2. **DOM insertion** `render` -  `componentDidMount` 
3. **Changes Reflection** - `getDerivedStateFromProps` - `render` 
4. **DOM removal** `componentWillUnmount`

*Functional Components* can use the `useEffect` in order to hook into the lifecycle.

# Component  Templating

> Way to describe the outputed HTML

**JSX**

```jsx

 {/* simple HTML element written in XML style */}
 <p></p>
 <input />

  {/* other React Component PascalCase */}
<Input />
<MyComponent />

 {/* use {} to insertregular JS Code */}
<p>{myEvaluatedExpression}</p>

 {/* use class attribute to affect css imported if using a react-create-app project */}
<input className="my-css" />

 {/* binding event handlers*/}
 <button onClick={myFunction}>Click</button>
 
 {/* DOM event are not propagated on React Component */}
 <MyComponent onClick={myFunction} />

```

# Component  Classification

> For ease of structure comprehensiveness componet can be organised by puropse as such:

* Basic - Dumb reusable unit used to build other compoenents
* Features - Smart, allow a user story.
* Layouts - Layouting resolution.

# Component  Composition

> A React Pattern to ensure maintability.

1. Create Configurable Foundation Component 
2. Create Composition of that Foundation in specific ways..;
    * Maintability
    * Semantic

# JavaScript Web API
https://www.w3.org/standards/webdesign/script


# SPA Routing

> https://reactrouter.com/
> Browser Based Routing - Switching Displayed Components

* Plan Your Routed Components (Pages, Views...)


# JavaScript

EcmaScript - TC39 - http://tc39.es

* Functionnal, Object (prototype)
* *Loose Typing* Dynamic Casting
    * `number`, `string`, `boolean`, `symbol`, (`function`, `object`)
    * Truthy / Falsy values ?
* `Array`, `Object`, `Map`, `Set`

# TypeScript

> Brings Some Static Types In JavaScript BEFORE RUNTIME
> JavaScript + Types

Progammer( TypeScript ) > TypeScript Compiler (TypeScript > JavaScript) > JSEngine( JavaScript )