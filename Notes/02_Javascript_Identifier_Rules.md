# JavaScript Identifier Rules

An identifier is the name you give to a variable, function, or class.

## Rules (with examples)

1. Must start with a letter, `_`, or `$`
   - Good: `name`, `_count`, `$price`
   - Bad: `1name`

2. After the first character, you can use letters, digits, `_`, and `$`
   - Good: `user1`, `total_Amount`, `id$`

3. No spaces
   - Good: `myName`
   - Bad: `my name`

4. No special characters except `_` and `$`
   - Good: `first_name`, `$el`
   - Bad: `user-name`, `email@`

5. Identifiers are case sensitive
   - `name` and `Name` are two different names

6. Cannot use reserved keywords as names
   - Bad: `let`, `class`, `return`

## Naming styles

- camelCase → for variables and functions  
  Example: `let myName = "KBC";`

- snake_case → also allowed  
  Example: `let my_name = "KBC";`

- SCREAMING_SNAKE_CASE → for constants  
  Example: `let MAX_NUMBER = 10;`

- PascalCase → for classes  
  Example: `let AnimalName = "Jacky";`

## More valid examples

```js
let myName = "KBC";
let my_name = "KBC";
let MAX_NUMBER = 10;
let AnimalName = "Jacky";
let _private = 1;
let $element = "div";
let user2 = "ok";
```

## Invalid examples (do not use)

```js
// let my name = "KBC";      // space not allowed
// let 1user = "KBC";        // cannot start with number
// let user-name = "KBC";    // hyphen not allowed
// let @email = "a@b.com";   // @ not allowed
// let let = 10;             // reserved keyword
```

## Quick tip

Prefer camelCase for normal variables, SCREAMING_SNAKE_CASE for constants, and PascalCase for classes.
