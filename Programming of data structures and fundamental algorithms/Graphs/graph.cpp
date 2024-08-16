#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

// Estructura para almacenar la información de cada entrada del archivo de bitácora
struct LogEntry {
    string month;
    int day;
    string time;
    string ip;
    string reason;
};

// Función para leer el archivo de bitácora y almacenar los datos en una lista de adyacencia por sección de IP
void readLogFile(const string& filename, map<string, int>& outDegree, map<string, vector<string>>& adjList) {
    ifstream file(filename);
    if (!file.is_open()) {
        cout << "No se pudo abrir el archivo: " << filename << endl;
        return;
    }

    string line;
    while (getline(file, line)) {
        LogEntry entry;
        istringstream iss(line);
        iss >> entry.month >> entry.day >> entry.time >> entry.ip;
        entry.ip = entry.ip.substr(0, entry.ip.find(":")); // Obtenemos solo la dirección IP sin el puerto
        entry.reason = line.substr(line.find(entry.ip) + entry.ip.length() + 1);

        // Separamos la dirección IP en secciones
        istringstream ipStream(entry.ip);
        string section;
        vector<string> ipSections;
        while (getline(ipStream, section, '.')) {
            ipSections.push_back(section);
        }

        // Incrementamos el out degree para el primer elemento de la IP
        outDegree[ipSections[0]]++;

        // Almacenamos las conexiones en la lista de adyacencia para los demás elementos de la IP
        for (size_t i = 0; i < ipSections.size() - 1; i++) {
            adjList[ipSections[i]].push_back(ipSections[i + 1]);
        }
    }

    file.close();
}

// Función para encontrar el nodo con el mayor in degree a partir de un nodo
string findNodeWithMaxInDegree(const map<string, int>& inDegree, const vector<string>& adjNodes, const vector<string>& usedNodes) {
    int maxInDegree = 0;
    string nodeWithMaxInDegree;

    for (const auto& adjNode : adjNodes) {
        if (inDegree.at(adjNode) > maxInDegree && find(usedNodes.begin(), usedNodes.end(), adjNode) == usedNodes.end()) {
            maxInDegree = inDegree.at(adjNode);
            nodeWithMaxInDegree = adjNode;
        }
    }

    return nodeWithMaxInDegree;
}

int main() {
    string filename = "bitacora.txt";
    map<string, int> outDegree;
    map<string, vector<string>> adjList;

    readLogFile(filename, outDegree, adjList);

    cout << "Out degree de cada nodo:" << endl;
    for (const auto& entry : outDegree) {
        cout << entry.first << ": " << entry.second << endl;
    }

    string bootMasterIP;

    // Encontramos el nodo con el mayor out degree para el primer elemento de la IP
    string nodeWithMaxOutDegree = max_element(outDegree.begin(), outDegree.end(), [](const auto& a, const auto& b) { return a.second < b.second; })->first;
    bootMasterIP += nodeWithMaxOutDegree;

    // Creamos un vector para rastrear los nodos utilizados en la dirección IP
    vector<string> usedNodes;
    usedNodes.push_back(nodeWithMaxOutDegree);

    // A partir del segundo elemento de la IP, encontramos el nodo con el mayor in degree a partir del nodo anterior
    for (int i = 0; i < 3; i++) { // Queremos 3 elementos adicionales en la IP (en total serían 4 elementos)
        auto adjNodes = adjList[nodeWithMaxOutDegree];
        string nodeWithMaxInDegree = findNodeWithMaxInDegree(outDegree, adjNodes, usedNodes);
        if (!nodeWithMaxInDegree.empty()) {
            bootMasterIP += "." + nodeWithMaxInDegree;
            usedNodes.push_back(nodeWithMaxInDegree);
            nodeWithMaxOutDegree = nodeWithMaxInDegree; // Actualizamos el nodo anterior para el siguiente ciclo
        } else {
            break; // No hay más nodos disponibles con el mayor in degree
        }
    }

    // Completamos con ceros si no se han encontrado suficientes elementos para la IP
    while (usedNodes.size() < 4) {
        bootMasterIP += ".0";
        usedNodes.push_back("0");
    }

    cout << "\nPresumiblemente, la direccion IP del boot master es: " << bootMasterIP << endl;

    return 0;
}
