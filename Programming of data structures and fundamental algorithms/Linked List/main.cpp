//Jose Manuel Martinez Morales
//A01734279
//Act 2.3

#include <fstream>
#include <iostream>
#include <vector>
#include <string>
using namespace std;

//Construir la estructura de la lista 
class Node {
public:
    string data;
    Node* prev;
    Node* next;

    Node(const string& value) : data(value), prev(nullptr), next(nullptr) {}
};

//Clase de una lista doblemente ligada
class DoublyLinkedList {
private:
    Node* head;
    Node* tail;

public:
    //Constructor
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}

    //Para verificar que la lista este vacia
    bool isEmpty() const {
        return head == nullptr;
    }

    //Agrega un nuevo Nodo a la lista
    void addNode(const string& data) {
        Node* newNode = new Node(data);
        if (isEmpty()) {
            head = tail = newNode;
        } else {
            newNode->prev = tail;
            tail->next = newNode;
            tail = newNode;
        }
    }


    //Ordena los registros por el numero de IP a traves de el algoritmo de ordenamiento quick sort
    void sortRecordsByIP() {
        if (isEmpty())
            return;

        Node* last = tail;
        quickSort(head, last);
    }

    //imprime los datos de la lista en un rango deseado
    void printRecordsByIP(const string& startIP, const string& endIP) const {
        Node* current = head;
        bool found = false;
        while (current != nullptr) {
            vector<string> fields = findIP(current->data);
            string ip = fields[3];
            if (ip >= startIP && ip <= endIP) {
                cout << current->data << endl;
                found = true;
            }
            current = current->next;
        }

        if (!found) {
            cout << "No se encontro la ip" << endl;
        }
    }

    //Almacena los datos ordenados en un archivo
    void storeSortedRecords(const string& filename) const {
    ofstream file(filename);
    if (!file) {
        cout << "Error al abrir el archivo." << endl;
        return;
    }

    Node* current = head;
    while (current != nullptr) {
        file << current->data << endl;
        current = current->next;
    }

    file.close();
}


private:
    //Almacenamos nuestros datos en un vector de vectores y con ello podemos leer la columan 3 para leer las ips y ordenarlas de manera facil
    vector<string> findIP(const string& record) const {
        vector<string> fields;
        string temp;
        for (char c : record) {
            if (c == ' ') {
                fields.push_back(temp);
                temp.clear();
            } else {
                temp += c;
            }
        }
        fields.push_back(temp);
        return fields;
    }

    //Funciones para realizar un quicksort y ordenar las ips
    void swap(Node* a, Node* b) {
        string temp = a->data;
        a->data = b->data;
        b->data = temp;
    }

    Node* partition(Node* low, Node* high) {
        string pivotIP = findIP(high->data)[3];
        Node* i = low->prev;

        for (Node* j = low; j != high; j = j->next) {
            if (findIP(j->data)[3] <= pivotIP) {
                i = (i == nullptr) ? low : i->next;
                swap(i, j);
            }
        }
        i = (i == nullptr) ? low : i->next;
        swap(i, high);
        return i;
    }

    void quickSort(Node* low, Node* high) {
        if (high != nullptr && low != high && low != high->next) {
            Node* pivot = partition(low, high);
            quickSort(low, pivot->prev);
            quickSort(pivot->next, high);
        }
    }


};

//lee el archivo
void readFile(const string& filename, DoublyLinkedList& bitacora) {
    ifstream file(filename);
    if (!file) {
        cout << "Error al abrir el archivo." << endl;
        return;
    }

    string line;
    while (getline(file, line)) {
        bitacora.addNode(line);
    }

    file.close();
}


//main
int main() {
    //declaramos variables y leemos el archivo bitacora
    DoublyLinkedList bitacora;
    string filename = "bitacora.txt";
    readFile(filename, bitacora);

    string startIP, endIP;
    cout<<"Recuerde que las IP normalmente tienen un formato ###.#.###.##"<<endl;
    cout << "Ingrese la IP de inicio: ";
    cin >> startIP;
    cout << "Ingrese la IP de fin: ";
    cin >> endIP;

    bitacora.sortRecordsByIP();
    bitacora.printRecordsByIP(startIP, endIP);
    bitacora.storeSortedRecords("bitacoraOrdenada.txt");

    return 0;
}