#pragma once
#include "iostream"
using namespace std;
//Declaracion de la clase persona

class Personaje{
	private:    //atributos
		string nombre;
		string descripcion;
		string ubicacion;
	public:   //metodos
		Personaje();
		Personaje(string,string,string);
		virtual void imprime();		//polimorfismo
		void setNombre(string);
		string getNombre();
		void setDescripcion(string);
		string getDescripcion();
		void setUbicacion(string);
		string getUbicacion();
		virtual int juega()=0;		//Clases abstractas
		virtual void recibeInteraccion(int)=0;
		
};
