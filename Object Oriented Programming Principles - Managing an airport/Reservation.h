#include "Flight.h"
#include <fstream>

class Reservation{
	private:
		User user;
		Flight flight;
	public:
		Reservation();
		void findFlightByDate();
		void findFlightByFromTo();
		void chooseFlight();
		void cancelFlight();
		void applyDiscount();
		
};

Reservation::Reservation(){
	user=User();
	flight=Flight();
}

void Reservation::findFlightByDate(){
  cout << "Dame la fecha con el formato (YYYY/MM/DD): ";
  string newDate;
  cin >> newDate;

  ifstream flightFile("flights.txt");
  bool found = false;
  string line;
  while (getline(flightFile, line)) {
    if (line.find(newDate) != string::npos) {
      if (!found) {
        cout << "Los vuelos encontrados para la fecha " << newDate << ":" << endl;
        found = true;
      }
      cout << line << endl;
    }
  }

  if (!found) {
    cout << "No se encontraron vuelos " << newDate << endl;
  }

  flightFile.close();
}



void Reservation::findFlightByFromTo(){
	cout << "A que pais quieres ir? ";
  string newFromTo;
  cin >> newFromTo;

  ifstream flightFile("flights.txt");
  bool found = false;
  string line;
  while (getline(flightFile, line)) {
    if (line.find(newFromTo) != string::npos) {
      if (!found) {
        cout << "Vuelos que van a " << newFromTo << ":" << endl;
        found = true;
      }
      cout << line << endl;
    }
  }

  if (!found) {
    cout << "No se encontraron vuelos a " << newFromTo << endl;
  }

  flightFile.close();
	
}

void Reservation::chooseFlight(){
	cout << "Cual es el numero de vuelo ";
  string newFlight;
  cin >> newFlight;

  ifstream flightFile("flights.txt");
  bool found = false;
  string line;
  while (getline(flightFile, line)) {
    if (line.find(newFlight) != string::npos) {
      if (!found) {
        cout << "Tu vuelo es " << newFlight << ":" << endl;
        found = true;
      }
      cout << line << endl;
    }
  }

  if (!found) {
    cout << "Ningun avion tiene el numero " << newFlight << endl;
  }

  flightFile.close();
}

void Reservation::cancelFlight(){
	cout<<"Su vuelo se cancelo con exito";
}


void Reservation::applyDiscount(){
		if (user.getKm()>=50000){
		flight.setPrice(flight.getPrice()*0.6);
	}
}


