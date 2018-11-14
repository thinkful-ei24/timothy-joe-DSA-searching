// input : book index and array of lists where each list represents a Dewey class
// for example, a list at index 0 would represent the 000 - computer science class, a list at index 1 would represent the 100 - philosophy class, etc
// given the class in the book index, directly access the corresponding list in the array
// then use binary search to search the specified class collection
  // grab the middle book in the collection and compare against the specified book index
  // if the middle book matches the specified book index, the search is a success
  // if the book index is lower than the middle book's index, recursively search the left-side of the middle book, otherwise recursively search the right side