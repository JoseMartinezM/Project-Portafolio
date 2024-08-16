#include <iostream>
#include <vector>
#include <fstream>
#include <sstream>
#include <unordered_map>
#include <unordered_set>

// Estructura para almacenar la información de cada entrada
struct LogEntry {
    std::string month;
    std::string day;
    std::string time;
    std::string ip;
    int port;
    std::string status;
};

// Función hash para el resumen del puerto
struct PortHash {
    std::size_t operator()(const int& port) const {
        // Usar la función hash de la librería estándar para enteros
        return std::hash<int>{}(port);
    }
};

// Resumen para cada puerto
struct PortSummary {
    int accessCount = 0; // Número de accesos
    std::unordered_set<std::string> uniqueIPs; // IPs únicas
    std::vector<std::string> ips; // IPs asociadas al puerto
};

void readFile(std::ifstream& fileName, std::vector<LogEntry>& entries) {
    std::string month, day, time, ipPort, status;
    int port;
    while (fileName >> month >> day >> time >> ipPort) {
        // Extraer la dirección IP y el puerto de ipPort
        std::istringstream ipPortStream(ipPort);
        std::getline(ipPortStream, ipPort, ':');
        ipPortStream >> port;

        // Leer el status completo
        std::getline(fileName >> std::ws, status);

        LogEntry entry = {month, day, time, ipPort, port, status};
        entries.push_back(entry);
    }
}

void generatePortSummary(const std::vector<LogEntry>& entries, std::unordered_map<int, PortSummary, PortHash>& portTable) {
    for (const LogEntry& entry : entries) {
        int port = entry.port;
        portTable[port].accessCount++;
        portTable[port].uniqueIPs.insert(entry.ip);
        portTable[port].ips.push_back(entry.ip);
    }
}

void displayPortSummary(int port, const PortSummary& summary) {
    std::cout << "Resumen para el puerto " << port << ":" << std::endl;
    std::cout << "Numero de accesos: " << summary.accessCount << std::endl;
    std::cout << "Numero de conexiones unicas: " << summary.uniqueIPs.size() << std::endl;
    std::cout << "Direcciones IP:" << std::endl;
    for (const std::string& ip : summary.ips) {
        std::cout << "- " << ip << std::endl;
    }
}

int main() {
    std::vector<LogEntry> entries;

    // Leer el archivo de entrada "bitacora.txt"
    std::ifstream inputFile("bitacora.txt");
    if (!inputFile) {
        std::cerr << "Error al abrir el archivo de entrada." << std::endl;
        return 1;
    }

    readFile(inputFile, entries);

    // Crear la tabla hash para el resumen de los puertos
    std::unordered_map<int, PortSummary, PortHash> portTable;
    generatePortSummary(entries, portTable);

    // Solicitar el puerto al usuario y mostrar el resumen correspondiente
    int targetPort;
    std::cout << "Ingrese el puerto a buscar: ";
    std::cin >> targetPort;

    PortSummary targetSummary = portTable[targetPort];
    displayPortSummary(targetPort, targetSummary);

    return 0;
}
