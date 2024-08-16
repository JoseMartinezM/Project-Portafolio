#include "User.h"
//Clase Flight
class Flight{
	private:
		string date;
		string hour;
		int price;
		string airplaneModel;
		string fromTo;
		int distance;
		int fuel;
		int crew;
	public:
		Flight();
		string getDate();
		void setDate(string newDate);
		string getHour();
		void setHour(string newHour);
		int getPrice();
		void setPrice(int newPrice);
		string getAirplaneModel();
		void setAirplaneModel(string newAirplaneModel);
		string getFromTo();
		void setFromTo(string newFromTo);
		int getDistance();
		void setDistance(int newDistance);
		int getFuel();
		void setFuel(int newFuel);	
		void printFlight();
};

Flight::Flight(){
	date="";
	hour="";
	price=0;
	airplaneModel="";
	fromTo="";
	distance=0;
	fuel=0;
	crew=0;
	User seats[120]=User();
}

//Setters y getters
string Flight::getDate() {
        return date;
        }
void Flight::setDate(string newDate) {
        date = newDate;
        }
string Flight::getHour() {
        return hour;
        }
void Flight::setHour(string newHour) {
        hour = newHour;
        }
int Flight::getPrice() {
        return price;
        }
void Flight::setPrice(int newPrice) {
        price = newPrice;
        }
string Flight::getAirplaneModel() {
        return airplaneModel;
        }
void Flight::setAirplaneModel(string newAirplaneModel) {
        airplaneModel = newAirplaneModel;
        }
string Flight::getFromTo() {
        return fromTo;
        }
void Flight::setFromTo(string newFromTo) {
        fromTo = newFromTo;
        }
int Flight::getDistance() {
        return distance;
        }
void Flight::setDistance(int newDistance) {
        distance = newDistance;
        }

int Flight::getFuel() {
        return fuel;
        }
void Flight::setFuel(int newFuel) {
        fuel = newFuel;
        }
	
void Flight::printFlight(){
	cout<<"The date of the flight is "<<date<<endl;
	cout<<"The hour of the flight is "<<hour<<endl;
	cout<<"The price of the flight is "<<price<<endl;
	cout<<"The airplane model of the flight is "<<airplaneModel<<endl;
	cout<<"Where the flight is heading is  "<<fromTo<<endl;
	cout<<"The distance of the flight is "<<distance<<endl;
	}

