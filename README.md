# Design Document for Computer Number System Converter

## Context & Scope

Computer runs in binary but human process numbers in decimal it is important for students who studies computer programming or computer science to understand the conversion.

This system of converting between radix is also known as [Computer Number System](https://www.categories.acsl.org/wiki/index.php?title=Computer_Number_Systems). It is to find out the result of the conversion however, for students who are trying to see the process it is very blurry.

This app is here to show each steps of how numbers were converted. This app will primarily focus on conversion between binary, octal, decimal, and hexadecimal, we will show each step of the conversion but at the beginning the conversion with floating points will _not_ be included, it will gradually added to the projects, including IEEE single precision number.

There are many conversion websites on the internet but many of them has the layout problems which makes it very hard to read, we will try to address and avoid the problem of not showing the step clear enough.

## Goals

- Show the steps of the conversions
- Cover conversion between binary, octal, decimal, hexadecimal
- The result will be shown in a reactive way
- Important changes with the numbers, it will be address with the text color.
- A quick and easy understanding of the process

## Non-Goals

- How to find out the conversion in programming language
- Not replacing the college education
- Not explaining how binary works in a computer

# Overview

The primary objective of our app is to offer a swift and straightforward method for understanding the steps involved in numeric conversions. This tool is particularly beneficial for students, as it provides a clear, step-by-step visualization to supplement their college studies in basic computer mathematics.

Understanding a concept involves more than just listening or reading about it; it's crucial to see how the concept is applied and how transformations occur. By visually demonstrating these processes, our app helps students recognize patterns and better understand the underlying concepts. This solid foundation of understanding enables students to effectively apply their knowledge and solve problems they encounter in practice sets or exams.

## Detailed Design

The process of conversion should be as follows:

1. User selects the number system to convert from and to.
2. User enters the number to convert.
3. The app shows the steps of before and after.
4. The app shows the result of the conversion.

We also need to consider the following:

1. Negative numbers.
2. Floating point numbers.
3. IEEE single precision number.
4. Letters in hexadecimal.
5. Where the changes occur and indicate with a different colored text.

For the first version of the app, we will focus on the following:

**first version deadline: 2023/12/31**

1. Binary, octal, decimal, and hexadecimal conversion.
2. No floating point numbers.
3. No IEEE single precision number.
4. Enable analytics and Google ads.

At the second stage, we will add the following:

1. Floating point numbers.
2. IEEE single precision number.
3. Negative numbers.

#### Technology stack:

1. SvelteKit
2. TailwindCSS
3. Deployment with Vercel
4. Open source and open to be criticized.

# Technical Details

to be added.

## Timeline

### 1st version deadline: 2023/12/31

Design Document:
Created on 2023/12/12.
Last update on 2023/12/12

If you are interest playing with this project feel to `git clone` it and run

```javascript
pnpm install
# or
npm install
```
