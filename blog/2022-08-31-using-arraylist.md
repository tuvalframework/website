---
title: Using ArrayList
author: Selim TAN
author_title: Software Engineer @ bpmgenesis
author_url: https://github.com/selimtan
author_image_url: https://avatars.githubusercontent.com/u/5240006?v=4
tags: [awe, hola]
---
### Array List

In Tuval Framework, the ArrayList is a non-generic type of List class.
An ArrayList can be used to add unknown data where you don’t know the types and the size of the data.

### Create an ArrayList
The ArrayList class included in the Tuval Framework Collections. Create an object of the ArrayList using the new keyword.

Inline code examples are Typescript. You can find full javascript sample end of the page.

```ts
const arlist:ArrayList = new ArrayList();
```

### Adding Elements in ArrayList
Use the Add() method or object initializer syntax to add elements in an ArrayList.

An ArrayList can contain multiple null, undefined and duplicate values.

```ts
// adding elements using ArrayList.Add() method
const arlist1:ArrayList = new ArrayList();
arlist1.Add(1);
arlist1.Add(“Bill”);
arlist1.Add(“ “);
arlist1.Add(true);
arlist1.Add(4.5);
arlist1.Add(null);
// adding elements using array initializer syntax
const arlist2:ArrayList = new ArrayList([2, “Steve”, “ “, true, 4.5, null]);
Use the AddRange(c: ICollection) method to add an entire Array, HashTable, SortedList, ArrayList, BitArray, Queue, and Stack in the ArrayList.

const arlist1: ArrayList = new ArrayList();

const arlist2: ArrayList = new ArrayList([1, "Bill", " ", true, 4.5, null]);

const arr:int[] = [100, 200, 300, 400];

const myQ: Queue = new Queue();
myQ.Enqueue("Hello");
myQ.Enqueue("World!");

arlist1.AddRange(arlist2); //adding arraylist in arraylist
arlist1.AddRange(arr); //adding array in arraylist
arlist1.AddRange(myQ); //adding Queue in arraylist
```

### Accessing an ArrayList

The ArrayList class implements the IList interface. So, elements can be accessed using Get and Set methods. Index starts from zero and increases by one for each subsequent element.

In typescript, you can explicit casting to the appropriate types, or use the any variable.

```ts
const arlist:ArrayList = new ArrayList([1,”Bill”,300,4.5]);
//Access individual item using indexer
const firstElement:int = arlist.Get(0); //returns 1 implicit type convertion in Typescript
const secondElement:string = arlist.Get(1); //returns “Bill”
//update elements
arlist.Set(0, “Steve”);
arlist.Set(1, 100);
```

### Iterate an ArrayList

The ArrayList implements the ICollection interface that supports iteration of the collection types. So, use the foreach method in Tuval Framework and the for loop to iterate an ArrayList. The Count property of an ArrayList returns the total number of elements in an ArrayList.

```ts
const arlist:ArrayList = new ArrayList([1,”Bill”,300,4.5]);
foreach (arlist, (item: any)=>{
 Console.Write(item + “, “); //output: 1, Bill, 300, 4.5,
});
for(int i = 0 ; i < arlist.Count; i++){
 Console.Write(arlist.Get(i) + “, “); //output: 1, Bill, 300, 4.5
}
```

### Insert Elements in ArrayList
Use the Insert() method to insert an element at the specified index into an ArrayList.

Signature: Insert( index:int, value: any):void in Typescript

const arlist:ArrayList = new ArrayList([ 1,”Bill”,300,4.5]);
arlist.Insert(1, “Second Item”);
foreach (arlist,(val: any)=>{
 Console.WriteLine(val);
});
Use the InsertRange() method to insert a collection in an ArrayList at the specfied index.
Signature: InsertRange( index:int, c:ICollection): void

const arlist1:ArrayList = new ArrayList([ 100, 200, 600]);
const arlist2:ArrayList = new ArrayList([ 300, 400, 500 ]);
arlist1.InsertRange(2, arlist2);
foreach(arlist1, (item: any)=>{
 Console.Write(item + “, “); //output: 100, 200, 300, 400, 500, 600,
});
Remove Elements from ArrayList
Use the Remove(), RemoveAt(), or RemoveRange methods to remove elements from an ArrayList.

const arList:ArrayList = new ArrayList([1,null,”Bill”,300,” “,4.5,300,]);
arList.Remove(null); //Removes first occurance of null
arList.RemoveAt(4); //Removes element at index 4
arList.RemoveRange(0, 2);//Removes two elements starting from 1st item (0 index)
Check Element in ArrayList
Use the Contains() method to determine whether the specified element exists in the ArrayList or not. It returns true if exists otherwise returns false.

const arList:ArrayList = new ArrayList([ 1,”Bill”,300,4.5,300]);
Console.WriteLine(arList.Contains(300)); // true
Console.WriteLine(arList.Contains(“Bill”)); // true
Console.WriteLine(arList.Contains(10)); // false
Console.WriteLine(arList.Contains(“Steve”)); // false