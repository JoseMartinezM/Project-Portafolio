#include "Guerrero.hpp"
#include <stdlib.h>

Guerrero::Guerrero(){
    puntos_salud = 0;
    salud_actual = 0;
    valor_ataque = 0;
}

Guerrero::Guerrero(string _nombre, string _descripcion, string _ubicacion, int _puntos_salud, int _salud_actual, int _valor_ataque):Personaje(_nombre, _descripcion, _ubicacion){
    puntos_salud=_puntos_salud;
    salud_actual=_salud_actual;
    valor_ataque=_valor_ataque;
}

void Guerrero::setPuntos_salud(int _puntos_salud){
    _puntos_salud=puntos_salud;
}

void Guerrero::setSalud_actual(int _salud_actual){
    _salud_actual=salud_actual;
}

void Guerrero::setValor_ataque(int _valor_ataque){
    _valor_ataque=valor_ataque;
}

int Guerrero::getPuntos_salud(){
    return puntos_salud;
}

int Guerrero::getSalud_actual(){
    return salud_actual;
}

int Guerrero::getValor_ataque(){
    return valor_ataque;
}

bool Guerrero::estaVivo(){
    return salud_actual>0;
}

int Guerrero::calculaPorcentajeSalud(){
    return (getSalud_actual()*100)/getPuntos_salud();
}

void Guerrero::imprimeBarraVida() {
    int porcentaje = calculaPorcentajeSalud() / 5;
    porcentaje = max(0, min(porcentaje, 20)); 

    if (porcentaje <= 0) {
        cout << "\033[31m" << string(20, '=') << "\033[0m" << endl;
    } else {
        cout << string(porcentaje, '%') <<string(porcentaje, '%') << string(20 - porcentaje, '=') << endl;
    }
}

int Guerrero::juega(){
    int rando=(rand()%getValor_ataque());
    cout<<getNombre()<<" ataca con "<<rando<<" de dano"<<endl;
    return rando;
}

void Guerrero::recibeInteraccion(int dano){                 //utilizamos las clases abstractas de personaje
    salud_actual-=dano;
    if(salud_actual<0){
        cout<<getNombre()<<" ha muerto" <<endl;
    }
    else{
        cout<<"Vida restante "<<getSalud_actual()<<endl;
        imprimeBarraVida();
    }
}

void Guerrero::imprime(){
    Persona:imprime();
    cout<<"La barra de vida es:"<<endl;
    imprimeBarraVida();
}

void Guerrero::operator++(){        //sobrecarga de operador
    valor_ataque+=10;
}