# Airport System Management

## Project Overview

This project is focused on solving a real-world problem related to the saturation of the Mexico City International Airport (AICM) using object-oriented programming principles in C++. The main objective was to design and implement a system that manages airport operations efficiently, ensuring compliance with the airport's constraints while optimizing the allocation of resources such as flights, slots, and passenger reservations.

## Problem Statement

The AICM has been experiencing saturation, particularly between 7 AM and 11 PM, leading to a significant decrease in the growth of operations. The airport's current capacity has been capped at 61 operations per hour, with a maximum of 40 landings. Given this, new flights can only be scheduled outside of these peak hours. The airport handles over 44 million passengers annually, accounting for 49% of all air traffic in Mexico. The challenge was to design a system that could manage user data, flight reservations, and cancellations effectively under these constraints.

## Objectives

- **Manage User Data**: The system should allow adding new users, prevent duplicate user entries, and manage user authentication.
- **Flight Search and Booking**: Users should be able to search for flights by destination and date, and make reservations depending on seat availability.
- **Reservation Management**: The system should handle reservations for passengers with varying accumulated kilometers and ensure correct seat allocation.
- **Cancellation Process**: The system should allow users to cancel their flight reservations and update the relevant data accordingly.

## System Design

### UML Diagram

The system design is based on a UML diagram that outlines the classes and their relationships, focusing on encapsulation, inheritance, and polymorphism to ensure a modular and maintainable codebase.

### Class Design

- **User Class**: Manages user information, including identification, authentication, and accumulated kilometers.
- **Flight Class**: Handles flight details such as destination, date, and seat availability.
- **Reservation Class**: Manages the reservation process, including booking and cancellations, and calculates the final price and updated kilometers.

### Implementation Details

#### User Class
- **Authentication**: Users are authenticated based on their credentials. If a user does not exist, the system will prompt an error message and terminate the process.
- **Kilometers Management**: Users with more than 50,000 accumulated kilometers receive special offers on reservations.

#### Flight Class
- **Flight Search**: Allows users to search for flights based on destination and date.
- **Seat Management**: Ensures that reservations are made only if seats are available, preventing overbooking.

#### Reservation Class
- **Booking Process**: Handles the booking process, checking seat availability, calculating prices, and updating the user’s kilometers.
- **Cancellation Process**: Manages the cancellation of reservations and ensures that the seat is freed up for future bookings.

## Testing

The system was tested with the following scenarios:

1. **Adding New Users**: Successfully added three new users.
2. **Duplicate User Check**: Attempted to add an existing user; the system correctly identified the duplicate.
3. **User Authentication**: Checked for a non-existent user, and the system responded with an appropriate error message.
4. **Flight Search and Booking**: Successfully searched for a flight and made reservations for multiple passengers.
5. **Seat Availability Check**: Tried to book an already occupied seat; the system correctly indicated the seat was unavailable.
6. **Reservation Management**: The system displayed the correct reservation details, final price, and updated kilometers.
7. **Reservation Cancellation**: Successfully canceled a reservation and updated the flight’s seat availability.

## Conclusion

This project provided a practical application of object-oriented programming concepts to solve a real-world problem. By leveraging C++ features such as classes, inheritance, and polymorphism, the system was able to efficiently manage the complexities of airport operations while adhering to the constraints imposed by the AICM’s saturation issues. This experience solidified the importance of modular and maintainable code in solving complex problems.
