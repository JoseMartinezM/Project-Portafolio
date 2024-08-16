#include "Amistoso.hpp"

Amistoso::Amistoso(){
    estatus=true;
    historia="";
}

Amistoso::Amistoso(string _nombre, string _descripcion, string _ubicacion, bool _estatus, string _historia):Personaje(_nombre, _descripcion, _ubicacion){
    estatus=_estatus;
    historia=_historia;
}

void Amistoso::setEstatus(bool _estatus){
    _estatus=estatus;
}

void Amistoso::setHistoria(string _historia){
    _historia=historia;
}

bool Amistoso::getEstatus(){
    return estatus;
}

string Amistoso::getHistoria(){
    return historia;
}

int Amistoso::juega(){
    if (getEstatus()){
        cout<<getHistoria()<<endl;
        return 1;
    }
    else{
        cout<<"El personaje no esta dispuesto a hablar";
        return 0;
    }
}

void Amistoso::recibeInteraccion(int num){
    if (num>3){
        juega();
    }
    else{
        cout<<"El personaje esta dormido"<<endl;
    }
}

void Amistoso::imprime(){
}