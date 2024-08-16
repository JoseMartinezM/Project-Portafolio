#include "Personaje.hpp"
//Constructores
Personaje::Personaje(){
    nombre="";
    descripcion="";
    ubicacion="";
}

Personaje::Personaje(string _nombre, string _descripcion, string _ubicacion){
    nombre=_nombre;
    descripcion=_descripcion;
    ubicacion=_ubicacion;
}
//setters y getters
void Personaje::setNombre(string _nombre){
    _nombre=nombre;
}

void Personaje::setUbicacion(string _ubicacion){
    _ubicacion=ubicacion;
}

void Personaje::setDescripcion(string _descripcion){
    _descripcion=descripcion;
}

string Personaje::getNombre(){
    return nombre;
}

string Personaje::getDescripcion(){
    return descripcion;
}

string Personaje::getUbicacion(){
    return ubicacion;
}
//imprime
void Personaje::imprime(){
    cout<<"El nombre es"<<getNombre()<<endl;
    cout<<"Su ubicacion es"<<getUbicacion()<<endl;
}