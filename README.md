# Component Library

![Profile Icon](./src/assets/image2.png)

## Table of Contents

- [About the Author](#author)
- [Reflection](#reflection)

## <a name="author"></a>About The Authors

- **[Christian Blunt](https://www.linkedin.com/in/christiangblunt/)**

## <a name="reflection"></a>Reflection

### 1. How did you handle optional props in your components?

I handled optional props by explicitly marking them as optional in the TypeScript interfaces using the `?` or ternary operator. When consuming these props inside components, I provided sensible default values either through default parameters or conditional rendering. This ensured that components behaved predictably even when certain props were omitted, and it prevented runtime errors caused by undefined values.

### 2. What considerations did you make when designing the component interfaces?

When designing component interfaces, I focused on clarity, reusability, and separation of concerns. Each interface was scoped to only the data and callbacks the component truly needed, avoiding unnecessary coupling. I also aimed to keep interfaces intuitive by using descriptive prop names and grouping related data together, which made the components easier to understand and reuse across the application.

### 3. How did you ensure type safety across your components?

Type safety was ensured by defining shared types and interfaces in a central location and importing them wherever needed. I avoided using `any` and relied on strict TypeScript checks to catch mismatches early. Function props were typed with clear parameter and return types, ensuring that data flowed correctly between parent and child components without ambiguity.

### 4. What challenges did you face when implementing component composition?

One of the main challenges in component composition was balancing flexibility with simplicity. Passing props through multiple layers of components sometimes required careful interface design to avoid prop drilling or super complex types. Another challenge was ensuring that composed components remained independent and reusable while still working seamlessly together within other higher-level components.
