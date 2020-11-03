1. Create a stack class
Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
2. Useful methods for a stack
Using the Stack class above, implement the following helper functions outside of the class:
peek(): allows you to look at the top of the stack without removing it
isEmpty(): allows you to check if the stack is empty or not
display(): to display the stack - what is the 1st item in your stack?
Remove McCoy from your stack and display the stack
3. Check for palindromes using a stack
A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
4. Matching parentheses in an expression
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.

5. Sort stack
Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

6. Create a queue using Singly linked list
Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
Implement a display() function outside of the Queue class that lets you display what's in the queue.
Remove Spock from the queue and display the resulting queue.
7. Create a queue class using Doubly linked List
Use the items listed in #6 and enqueue them to your queue.

Check to see who is first one on the Queue?
8. Queue implementation using a stack
There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

9. Square dance pairing
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

F Jane

M Frank

M John

M Sherlock

F Madonna

M David

M Christopher

F Beyonce

Female dancer is Jane, and the male dancer is Frank
Female dancer is Madonna, and the male dancer is John
Female dancer is Beyonce, and the male dancer is Sherlock
There are 2 male dancers waiting to dance
10. The Ophidian Bank
At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.