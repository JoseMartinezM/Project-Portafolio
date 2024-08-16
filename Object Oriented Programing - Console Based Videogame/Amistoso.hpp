#include "Personaje.hpp"
using namespace std;

class Amistoso:public Personaje{        //herencia
    private:
        bool estatus;
        string historia;
    public:
        Amistoso();
        Amistoso(string, string, string, bool, string);
        int juega();                    //utilizamos las clases abstractas de Personaje
		void recibeInteraccion(int);
        void setEstatus(bool);
        void setHistoria(string);
        bool getEstatus();
        string getHistoria();
        void imprime();     //polimorfismo

};

