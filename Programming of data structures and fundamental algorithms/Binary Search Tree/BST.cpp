#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;

class BST {
private:
    struct Node {
        string key;
        int counter;
        vector<string> ipAddresses;
        Node* left;
        Node* right;

        Node(const string& k, const string& ip) : key(k), counter(1), left(nullptr), right(nullptr) {
            ipAddresses.push_back(ip);
        }
    };

    Node* root = nullptr;

    // Inserts nodes into the BST
    Node* insert(Node* node, const string& key, const string& ip) {
        if (!node) {
            return new Node(key, ip);
        }

        if (key == node->key) {
            node->counter++;
            node->ipAddresses.push_back(ip);
        } else if (key < node->key) {
            node->left = insert(node->left, key, ip);
        } else {
            node->right = insert(node->right, key, ip);
        }

        return node;
    }

    // Orders ports based on ammounts of times they appear
     void getTopNPortsHelper(Node* node, vector<pair<string, int>>& sortedPorts, int N) {
        if (node) {
            getTopNPortsHelper(node->right, sortedPorts, N);
            
            if (sortedPorts.empty()) {
                sortedPorts.push_back(make_pair(node->key, node->counter));
            } else {
                // Search for its position to insert node into the vector
                auto it = sortedPorts.begin();
                while (it != sortedPorts.end() && node->counter <= it->second) {
                    ++it;
                }
                sortedPorts.insert(it, make_pair(node->key, node->counter));
            }
            
            if (sortedPorts.size() > N) {
                sortedPorts.pop_back(); // We only keep most repeated ports
            }
            
            getTopNPortsHelper(node->left, sortedPorts, N);
        }
    }

    // Looks for the node where the searched port is located
    Node* findNode(Node* node, const string& port) {
        if (!node || node->key == port) {
            return node;
        }

        if (port < node->key) {
            return findNode(node->left, port);
        } else {
            return findNode(node->right, port);
        }
    }

public:
    void insert(const string& key, const string& ip) {
        root = insert(root, key, ip);
    }

    // Looks for top (number that we want) of ports and orders them in descending order
      vector<pair<string, int>> getTopNPorts(int N) {
        vector<pair<string, int>> sortedPorts;
        getTopNPortsHelper(root, sortedPorts, N);
        return sortedPorts;
    }

    // Prints ports IP
    void printIPsForPort(const string& port) {
        Node* node = findNode(root, port);
        if (node) {
            cout << "IP's for port " << port << ": \n";
            for (const auto& ip : node->ipAddresses) {
                cout << ip << " " << endl;
            }
            cout << endl;
        } 
    }

    // Creates BST in which IP and port are separated
    void buildBSTFromLogFile(const string& filename) {
        ifstream inputFile(filename);
        if (!inputFile) {
            cout << "File couldn't be open " << filename << endl;
            exit(1);
        }

        string month, day, time, ipPort, reason;

        while (inputFile >> month >> day >> time >> ipPort) {
            getline(inputFile, reason); 
            size_t colonPosition = ipPort.rfind(':');
            if (colonPosition != string::npos) {
                string port = ipPort.substr(colonPosition + 1); 
                insert(port, ipPort.substr(0, colonPosition)); 
            }
        }

        inputFile.close();
    }

};

int main() {
    BST bst;

    // Constructs BST based on "bitacora.txt" doc.
    bst.buildBSTFromLogFile("bitacora.txt");

    // Displays "topN" ammount of most repeated ports
    int topN = 5;
    vector<pair<string, int>> topPorts = bst.getTopNPorts(topN);

    cout << "The top " << topN << " of most accesed ports are:\n" << endl;
    for (const auto& pair : topPorts) {
        cout << "Port " << pair.first << ", which was accesed " << pair.second << " times." << endl;
        bst.printIPsForPort(pair.first);
        cout << endl;
    }

    return 0;
}
