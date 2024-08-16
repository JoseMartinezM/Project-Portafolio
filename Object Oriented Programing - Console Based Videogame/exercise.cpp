#include <iostream>
#include <vector>
#include <unistd.h>
#include "Guerrero.hpp"
#include "Amistoso.hpp"
//funcion para el menu
void mostrarMenu() {
    cout << "----------- MENÚ -----------" << endl;
    cout << "1. Jugar" << endl;
    cout << "2. Salir" << endl;
    cout << "-----------------------------" << endl;
    cout << "Ingrese su opción: ";
}
//funcion para que los personajes guerrero juegen
void fight(Guerrero* jugador, Guerrero* malo){
    int damagej;
    int damagem;
    cout<<malo->getNombre()<<" se entrometio en tu camino"<<endl;
    while (jugador->estaVivo() and malo->estaVivo()){
        damagej=jugador->juega();
         cout.flush();                      //Utilizamos flush y sleep para que el usuario pueda leer el texto y el programa no se ejecute de golpe
  sleep(1);
        malo->recibeInteraccion(damagej);
        malo->imprimeBarraVida();
        if (malo->estaVivo()){
cout.flush();
  sleep(1);
            damagem=malo->juega();
            jugador->recibeInteraccion(damagem);
            jugador->imprimeBarraVida();
        }
            else{
                cout.flush();
  sleep(1);
                cout<<"Has vencido a "<<malo->getNombre()<<endl;
                break;
        };
    };
}
//funcion para que Guerrero y Amistoso jueguen
void meeting(Guerrero* jugador, Amistoso* bueno){
    cout.flush();
  sleep(1);
    cout<<"Te encuentras con "<<bueno->getNombre()<<endl;
    int random=(rand()%10);
    bueno->recibeInteraccion(random);
    if(random>3){
        cout<<"Toma esto es la espada del heroe te aumentara el ataque"<<endl;
        cout.flush();
  sleep(1);
        jugador->operator++();
    }
}

//Para finalizar la pelea
bool victoria(Guerrero* jugador){
    if (jugador->estaVivo()){
        cout<<"Felicidades"<<endl;
        cout.flush();
  sleep(1);
        cout<<"Encuentras un villa donde descansar y recuperas puntos de salud"<<endl;
        jugador->setSalud_actual(100);
        return true;
    }
    else{
        cout<<"Has muerto"<<endl;
        return false;
    };
    }
//main
int main() 
{
    srand(static_cast<unsigned int>(time(nullptr)));
  int comando;
  vector<Personaje*> pers;      //Utilizamos vector
  Guerrero ely("Elysian","Elysian es un hombre bondadoso de un pequeno Pueblo llamado Aurelia, Elysian se prepara ir a buscar el orbe de los suenos","Aurelia", 100,100,25);
  Guerrero mor("Morgana","Una Malvada bruja al servicio de Lord Draconis","Torre Destruida",100,100,10);
  Guerrero lord("Lord Draconis","El malvado emperador que robo el orbe de los suenos","Castillo infernal",100,100,15);
  Amistoso migan("Miguel Angel","Un gran maestro de la katana y el chiflido aullador","Valle olvidado",true,"Oh vienes a pelear contra el gran Lord Draconis, toma necesitaras esto ");
  pers.push_back(&ely);
  pers.push_back(&mor);         //definimos nuestros personajes y los metemos al vector
  pers.push_back(&lord);
  pers.push_back(&migan);
    mostrarMenu();

    cin>>comando;
    if(comando==1){
        cout<<"Bienvenido a Chronicles of Lumaria"<<endl;
         cout.flush();
  sleep(3);
        cout << "En este juego, serás un valiente guerrero que explorará diferentes mundos y se enfrentará a personajes amistosos y enemigos." << endl;
         cout.flush();
  sleep(3);
        cout<<"Tu mision es derrotar al malvado Lord Draconis, el cual ha robado el orbe de los suenos y ahora las personas no pueden dormir"<<endl;
         cout.flush();
  sleep(3);
        cout<<"Buena suerte"<<endl;
        
        Guerrero* jugador = dynamic_cast<Guerrero*>(pers[0]);
        Guerrero* malo1 = dynamic_cast<Guerrero*>(pers[1]);         //Utilizamos dinamyc cast para poder utilizar las caracteriticas de las clases hijas como punteros
        Guerrero* malo2 = dynamic_cast<Guerrero*>(pers[2]);
        Amistoso* bueno = dynamic_cast<Amistoso*>(pers[3]);
        cout<<jugador->getDescripcion()<<endl;
         cout.flush();
  sleep(2);
        cout<<"Te encuentras en "<<jugador->getUbicacion()<<endl;
 cout.flush();
  sleep(2);
        cout<<"Continuas tu aventura hacia "<<malo1->getUbicacion()<<endl;
 cout.flush();
  sleep(2);
        cout<<"Te encuentras con "<<malo1->getNombre()<<endl;
 cout.flush();
  sleep(2);
        cout<<malo1->getDescripcion()<<endl;
 cout.flush();
  sleep(2);
        fight(jugador,malo1);
        victoria(jugador);
         cout.flush();
  sleep(2);
        cout<<"Continuas tu aventura hacia "<<bueno->getUbicacion()<<endl;
         cout.flush();
  sleep(2);
        cout<<bueno->getDescripcion()<<endl;
         cout.flush();
  sleep(2);       

        meeting(jugador, bueno);
         cout.flush();
  sleep(2);
        cout<<"Continuas tu aventura hacia "<<malo2->getUbicacion()<<endl;
         cout.flush();
  sleep(2);
        cout<<"Te encuentras con "<<malo2->getNombre()<<endl;
         cout.flush();
  sleep(2);
        cout<<malo2->getDescripcion()<<endl;
         cout.flush();
  sleep(2);
        fight(jugador,malo2);
        victoria(jugador);

        cout<<"Apunto de morir Lord Draconis te da la esfera es tu momento de decidir que hacer"<<endl;
        int final;
        cout<<"1=Quedarte con el orbe y dominar el mundo"<<endl;
        cout<<"2=Devolover los suenos a las personas"<<endl;
        cin>>final;
        try {           //Excepcion out of range
    if (final == 1) {
        cout << "Te quedaste con el orbe y ahora dominas el mundo" << endl;
        cout << "Bad ending";
    } else if (final == 2) {
        cout << "devuelves el orbe a la gente y te consideran un heroe" << endl;
        cout << "Good ending";
    } else {
        throw "opcion invalida";
    }
} catch (const char* msj) {
    cout << msj << "ingresa una opcion valida" << endl;
    cin >> final;
    
    if (final == 1) {
        cout << "Te quedaste con el orbe y ahora dominas el mundo" << endl;
        cout << "Bad ending";
    } else if (final == 2) {
        cout << "devuelves el orbe a la gente y te consideran un heroe" << endl;
        cout << "Good ending";
    } else {
        cout << "Opción inválida. Terminando el programa." << endl;
    }
}
    };
    if(comando==2){
    cout<<"Salida exitosa"<<endl;
  };

}

//Gracias

