# Brute-Force Sorting
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I am sorry I should've been more descriptive. I attempted to create my own finding next perumatation function by doing it recursively down to the base case and swapping them and then moving up and checking if it was sorted along the way. However, I was unable to get it to work quite right so I asked chatGPT for an algorithm(pseudocode) to find the next permutation. I read what it was trying to do and learned what it meant. Then I implimented it in code.  

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

The runtime complexity of the algorithm is N(N!), this is because you will run through every permutation
of the list at worst case and N!/2 on average case which is still N!. The extra N multiplied is because inside every permutation, you run over the whole list to check if it is sorted or not. The best case for me would be a 
list that is already sorted because it would pass the first test to see if it is sorted. The worst case
is when the list is in reverse order and would produce an N! runtime. This would become more of a probability
if I were to randomly generate permutations, this is because at any given time there is a $1/{N!}$ chance of 
finding the correct list. This is hard to translate to a complexity but it would be about N!.
