# Cowsay

Cowsay is a fun script that prints an [ASCII](https://simple.wikipedia.org/wiki/ASCII) cow with your words in a speech bubble. It works like this: there is a library of pictures of cows made out of ASCII characters. You call the script in your terminal and you pass in arguments. There are lots of options, but one argument is required: a text string for the cow to say.

```
 ________
< Mooooo >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

Cowsay was originally written in [Perl](https://simple.wikipedia.org/wiki/Perl), but has been written in many other programming languages too. In this coursework, we will write it in JavaScript.

## Project

Let's get one cow printing out and saying whatever we write in the command line. What would be helpful? I think we need to:

- [Accept an argument](https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line) from the command line.
- Output to the command line. You've already done this with console.log.
- Make an ASCII cow.
- Write a function that puts the string into the cow's speech bubble.

Write your solution in the file solution1.js and test it by running your program in the command line. How will you handle it when no argument is given? How will you make the picture of a cow?

### Iterating

We could make our program more accessible by adding a command line interface that prompts us to write in the cow's words. What tools can we use? I think we could use:

- A command line interface. I'll start you off by letting you know that there is a built in CLI called [readline](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs).
- Our ASCII cow again.
- And our cow function.

Write your solution in a file called solution2.js and test it by running your program in the command line. Use a prompt to ask for your cow saying.

Compare your approach to the sample solutions (you can unlock next week). Your solution might be different and that's ok. If you can print a cow and you can make it say different things, you solved it.

A slightly simpler ASCII cow that might help if you hit formatting issues.

```
       /
      /
^__^ /
(oo)'_______
(__)        )-~
   ||----w |
   ||     ||
```
