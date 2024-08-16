#include "Personaje.hpp"

class Guerrero: public Personaje{//herencia
    private:
        int puntos_salud;
        int salud_actual;
        int valor_ataque;
    public:
        Guerrero();
		Guerrero(string, string, string, int,int,int);
		void setPuntos_salud(int);
		int getPuntos_salud();
		void setSalud_actual(int);
		int getSalud_actual();
		void setValor_ataque(int);
		int getValor_ataque();
        void imprime();         //polimorfismo
		int juega();            //usamos las clases abstractas de personaje
		void recibeInteraccion(int);
        bool estaVivo();
        int calculaPorcentajeSalud();
        void imprimeBarraVida();
        void operator++();//sobrecarga de operador
		
};


