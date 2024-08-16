# Console-Based Text Game

## Introduction

This project involves the development of a text-based console game, applying the concepts learned in the Object-Oriented Programming course, such as inheritance, polymorphism, abstract classes, operator overloading, and exception handling. The game is set in an environment composed of multiple rooms or worlds, with the presence of a player, friendly characters, and antagonistic characters.

The player's objective is to explore the different rooms, interact with the characters, and face enemies to advance to the next world. The game progresses through a sequence of world exploration and confrontations with antagonistic characters. If the player loses to an enemy, the corresponding message will be displayed, and the game will end.

## UML Diagram

[Insert UML diagram here]

## Development

### Base Class Declaration: `Character`

In this declaration of the main class "Character," we applied the concepts of abstract classes and polymorphism learned in the course.

- **Polymorphism**: The method `print()` is declared as virtual in the base class `Character`. This allows derived classes of `Character` to override this method and provide their implementation. Polymorphism is implemented when the `print()` method is called on a base class object, but the specific implementation of the derived class is executed.
  
- **Abstract Class**: The class contains two pure virtual methods: `play()` and `receiveInteraction(int)`. These methods do not have a defined implementation in the base class, indicating that the `Character` class is abstract. By declaring these methods as pure virtual `= 0`, derived classes are required to provide an implementation for them. Any class derived from `Character` must define the `play()` and `receiveInteraction(int)` methods before it can be instantiated. By making the base class abstract, a common structure is established, ensuring that all derived classes will have specific functionality.

### `Character.cpp`: Getters, Setters, and Methods

Here, we implemented the setters, getters, and respective functions of the base class, using polymorphism.

### Class Declaration: `Warrior.hpp`

In the `Warrior` class, we utilized inheritance since the `Warrior` class inherits from the base class `Character` via the `public Character` declaration. This establishes an "is-a" relationship between `Warrior` and `Character`. A warrior is a type of character. By inheriting from the `Character` class, the `Warrior` class acquires all the attributes and behaviors defined in the base class, including attributes and methods such as name, description, and location, among others. Inheritance allows code reuse and extension from the base class.

We also implemented polymorphism here, as the `Warrior` class redefines the `print()` method inherited from the base class `Character`. By declaring this method as `virtual` in the base class and overriding it in the derived class, polymorphism is established. When the `print()` method is called on a `Warrior` object, the specific `print()` implementation in the `Warrior` class is executed instead of the inherited base class implementation. This allows different types of characters to have distinct print behaviors while using a common interface.

### Class Declaration: `Warrior.cpp`

In this code snippet, we also used operator overloading as a function since the `++` operator is overloaded in the `Warrior` class by defining the `operator++()` method. The operator overloading allows the `attack_value` to be increased by 10 units when the operator is used on a `Warrior` object. This provides a convenient way to increase the warrior's attack value without needing to call an additional method.

Additionally, by inheriting from the abstract class, the `Warrior` class is required to implement the pure virtual methods defined in the base class. This ensures that each character type derived from `Character` has an appropriate implementation for the play and interaction methods.

### Class Declaration: `Friendly.hpp`

Similar to `Warrior`, in the `Friendly` class, we used inheritance since it is a derived class of `Character`. We also implemented polymorphism and abstract classes.

### `Friendly.cpp`

In this code, similar to `Warrior.cpp`, we implemented polymorphism by using the `print()` method of the base class `Character`, as well as utilizing the abstract class.

### Main Program: `main.cpp`

In the main code development, we used all the concepts mentioned earlier, starting with exceptions. An exception is used to handle the situation where the user enters an invalid option when deciding the game's end. The `throw` statement is used to raise an error message indicating that the entered option is invalid, and the `try-catch` block is used to catch the exception and provide an appropriate response. This allows controlling and handling cases where invalid options are entered, preventing the program from crashing or behaving unexpectedly.

Polymorphism is also used in this code by using pointers to the base class `Character` to store objects of the derived classes `Warrior` and `Friendly`. This allows treating objects of different derived classes as if they were objects of the base class, making it easier to process and manipulate multiple characters in a common data structure. For example, polymorphism is used when calling the `play()`, `receiveInteraction()`, and `printLifeBar()` methods on objects of the `Warrior` and `Friendly` classes through pointers to the base class `Character`. This promotes flexibility and code extensibility, as new classes derived from `Character` can be added easily without modifying existing code.

## Conclusions

### Rodrigo Emmanuel:
I can say that I learned a lot from Object-Oriented Programming (OOP), knowing how to refine the codes we implement to solve everyday problems, and understanding that today we have such powerful tools like technology and software usage. Additionally, I learned about code reuse, making it more understandable when working. Therefore, I learned a lot and, in conjunction with what I had previously learned about OOP, I deepened my knowledge and understanding of the topics we covered throughout this course and applied in this project.

In conclusion, Object-Oriented Programming is a powerful and flexible approach to software development, based on the creation and manipulation of objects, providing the necessary tools to model and solve complex problems in a modular, reusable, and easy-to-understand way.

### Jose Manuel:
Thanks to Object-Oriented Programming, I acquired a solid foundation for developing quality software. OOP allows us to adapt to changes and requirements of a project.

In conclusion, OOP is an essential tool in modern software development and in the career of Computer Engineering. Through its resources, we can efficiently tackle the problem of the challenge. Similarly, OOP allows programmers to build efficiently in the rapidly evolving technological world.
