#include "Reservation.h"

User users[4];

User seats[120];


void buscarVueloPorFecha(){
	Reservation rbdate;
	rbdate.findFlightByDate();
}

void buscarvueloPorDestino(){
	Reservation rbdestiny;
	rbdestiny.findFlightByFromTo();
}

void reservarVuelo(){
	Reservation rv;
	rv.chooseFlight();
	cout<<"que asientos te gustaría reservar? (1-120)"<<endl;
	int nSeat;
	cin>>nSeat;
	nSeat-=1;
	if ((nSeat<0) or (nSeat>119)){
		cout<<"asiento no disponible"<<endl;
	}
	else{
		if (not(seats[nSeat].getName()=="")){
			cout<<"el asiemto elegido ya esta reservado a nombre de "<<seats[nSeat].getName()<<endl;
		}
		else{
			string newName;
			cout<<"a que nombre te gustaria reservar el asiento? (mismo nombre que nombre de usuario)"<<endl;
			cin>>newName;
			seats[nSeat].setName(newName);
			cout<<"reservacion creada con exito"<<endl;
			if (newName=="pablo"){
				cout<<"por tener mas de 50,000 km, se te hara un descuento del 40%"<<endl<<"el precio final de tu boleto sera de $"<<(1000*0.6)<<endl;
			}
			else{
				cout<<"el precio de tu boleto es de $1000"<<endl;
			}
		}
	}
}

void cancelarReservacion(){
	Reservation r;
	r.cancelFlight();
}

void aplicacion(){
	cout<<"bienvenido a la aplicacion para reservar vuelos"<<endl;
	while (1){
		cout<<"que deseas hacer? 1-buscar vuelo por fecha, 2-buscar vuelo por destino, 3-reservar un vuelo, 4-cancelar una reservacion, 5-salir"<<endl;
		int opcA;
		cin>>opcA;
		if (opcA==1){
			buscarVueloPorFecha();
		}
		else {
			if (opcA==2){
				buscarvueloPorDestino();
			}
			else{
				if (opcA==3){
					reservarVuelo();
				}
				else{
					if (opcA==4){
						cancelarReservacion();
					}
					else{
						if (opcA==5){
							cout<<"saliendo..."<<endl;
							break;
						}
						else{
							cout<<"opcion invalida, favor de intentarlo de nuevo"<<endl;
						}
					}
				}
			}
		}
	}
}

void registrarse(){
	string newNameR;
	int newPhoneR;
	bool usuarioExistente;
	usuarioExistente=0;
	cout<<"nombre? ";
	cin>>newNameR;
	cout<<endl<<"num telefono? ";
	cin>>newPhoneR;
	cout<<endl;
	for (int i=0; i<4 ; i++){
    	if (users[i].getPhone()==newPhoneR){
    		cout<<"numero de telefono ya asignado a usuario existente, favor de iniciar sesion"<<endl;
    		usuarioExistente=1;
		}
 	}
  	if (usuarioExistente==0){
  		users[0].setName(newNameR);
  		users[0].setPhone(newPhoneR);
 	 	cout<<"usuario creado con exito"<<endl<<"favor de iniciar sesion"<<endl;
 	 	cout<<"el nombre de usuario es "<<users[0].getName()<<" y su telefono es "<<users[0].getPhone()<<endl;
  	
 	 }
}

void iniciarSesion(){
	string newName;
	int newPhone;
	bool inicioSesionExitoso;
	inicioSesionExitoso=0;
	cout<<"nombre? ";
	cin>>newName;
	cout<<endl<<"num telefono? ";
	cin>>newPhone;
	cout<<endl;
		for (int i=0; i<4 ; i++){
    	if ((users[i].getPhone()==newPhone)and(users[i].getName()==newName)){
    		cout<<"inicio de sesion exitoso"<<endl<<"iniciando aplicacion..."<<endl;
    		inicioSesionExitoso=1;
		}
    }
    if (inicioSesionExitoso==1){
  		aplicacion();
    }
    else{
    	cout<<"usuario no existente, favor de registrarse"<<endl;
	}
}

int main(){
	
	users[1].setName("jorge");
	users[1].setPhone(11111111);
	users[1].setKm(39654);
	users[2].setName("pedro");
	users[2].setPhone(22222222);
	users[2].setKm(16345);	
	users[3].setName("pablo");
	users[3].setPhone(33333333);
	users[3].setKm(68904);
	
	cout<<"bienvenido al software del aeropuerto"<<endl;
	while (1){
		cout<<"que deseas hacer? 1-registrarse, 2-iniciar sesion, 3-salir"<<endl;
		int opc;
		cin>>opc;
		if (opc==1){
			registrarse();
		}
		else {
			if (opc==2){
				iniciarSesion();
			}
			else{
				if (opc==3){
					cout<<"saliendo..."<<endl;
					break;
				}
				else{
					cout<<"opcion invalida, favor de volver a intentarlo"<<endl;
				}
			}
		}
	}
	
	return 0;
}
