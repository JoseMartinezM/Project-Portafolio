#include <iostream>
#include <string>

using namespace std;

class User{
	private:
		string name;
		int phone;
		int kilometers;
	public:
		User();
		string getName();
		void setName(string newName);
		int getPhone();
		void setPhone(int newPhone);
		void setKm(int newKm);
		int getKm();
		void addKms(int newKms);
};

User::User(){
	name="";
	phone=0;
	kilometers=0;
}

string User::getName(){
return name;
}

void User::setName(string newName){
name = newName;
}

int User::getPhone(){
return phone;
}

void User::setPhone(int newPhone){
phone = newPhone;
}

void User::setKm(int newKm){
kilometers = newKm;
}

int User::getKm(){
return kilometers;
}

void User::addKms(int newKms){
	kilometers+=newKms;
}



