#include <fstream>
#include <iostream>
#include <vector>
#include <string>
using namespace std;

 //Assign numerical value to a date (days passed)
int convertDateToValue(const string& month, const string& day) {
    const string months[] = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
    for (int i = 0; i < 12; i++) {
        if (month == months[i]) {
            return i * 31 + stoi(day); //We assume a month has 31 days and we multiply that by the month index to determine days passed to that month and we add the day of the month
        }
    }
    return 0;
}

 //Vector creation from txt (read lines and create vector of vectors)
vector<vector<string>> fileToVector(ifstream &file, vector<vector<string>>& bitacora){
    string temp;
    vector<string> tempvec;
    int iteration = 0;
    bitacora.reserve(16807); //We reserve a specific ammount of memory because we know the ammount of entries
    while (iteration <= 16806){ // We iterate through each line of the txt
        for (int i = 0; i <= 4; i++){//We create a vecctor with 5 indexes
            if (i <= 3){
                getline(file, temp, ' ');
            }
            else{
                getline(file, temp, '\n');
            }
            tempvec.push_back(temp);
        }
        bitacora.push_back(tempvec); //We return the vector created to the main vector of vectors
        tempvec.clear();
        iteration++;
    }
    file.close();
    return bitacora;
}

int partition(vector<vector<string>>& bitacora, int l, int r){
    int pivot = convertDateToValue(bitacora[r][0],bitacora[r][1]);
    int i = l - 1;
    for(int j = l; j<=r-1; j++){
        if(convertDateToValue(bitacora[j][0],bitacora[j][1]) < pivot){
            i += 1;
            swap(bitacora[j], bitacora[i]);
        }
    }
    swap(bitacora[i+1],bitacora[r]);
    return i + 1;
}

 //Vector sorting using quicksort
vector<vector<string>>& sortV(vector<vector<string>>& bitacora, int l, int r){
    if (l < r) {
        int p = partition(bitacora, l, r);
        sortV(bitacora, l, p - 1);
        sortV(bitacora, p + 1, r);
    }
    return bitacora;
}

 //Prints the bitacora vector onto a new txt
void printBitacora(vector<vector<string>>& bitacora, ofstream &file){
    for (int j = 0; j <= bitacora.size()-1; j++){
        for (int i = 0; i <= 4; i++){
            file << bitacora[j][i] << ' ';
        }
        file << '\n';
    }
    file.close();
}

 //Displays selected range of dates
void printDates(vector<vector<string>>& bitacora){
    bool valid = false;
    int option, searchValueLow, searchValueHigh, low=0, high=bitacora.size()-1, middle = (high+low)/2, start, end, middleV;
    string month, day;

    //Loop until we get a valid input (start < end)
    while(valid !=true) {
        for (int i = 0; i <= 1; i++) {
            if (i == 0)
                cout << "----- Start Date -----\n" << endl;
            if (i == 1)
                cout << "----- End Date -----\n" << endl;
            cout
                    << "1. January\n2. February\n3. March\n4. April\n5. May\n6. June\n7. July\n8. August\n9. September\n10. October\n11. Novermber\n12. December\nSelect a month(Number): ";
            cin >> option;
            switch (option) {
                case 1:
                    month = "Jan";
                    break;
                case 2:
                    month = "Feb";
                    break;
                case 3:
                    month = "Mar";
                    break;
                case 4:
                    month = "Apr";
                    break;
                case 5:
                    month = "May";
                    break;
                case 6:
                    month = "Jun";
                    break;
                case 7:
                    month = "Jul";
                    break;
                case 8:
                    month = "Aug";
                    break;
                case 9:
                    month = "Sep";
                    break;
                case 10:
                    month = "Oct";
                    break;
                case 11:
                    month = "Nov";
                    break;
                case 12:
                    month = "Dec";
                    break;
                default:
                    cout << "Unreachable value, restart the program\n";
                    exit(0);
            }
            cout << "Select a day (1-31): ";
            cin >> day;
            cout << "Selected Date: " << month << ' ' << day << endl << endl;
            if (i == 0) {
                searchValueLow = convertDateToValue(month, day);
            }
            if (i == 1)
                searchValueHigh = convertDateToValue(month, day);
        }
        if (searchValueLow > searchValueHigh){
            valid = false;
            cout << "Please input valid date range" << endl;
        } else {valid = true;}

    }

    //Binary search for lowValue index
    while(low<=high) {
        middle = (high+low)/2;
        int compareValue = convertDateToValue(bitacora[middle][0],bitacora[middle][1]);
        if (searchValueLow < convertDateToValue(bitacora[0][0],bitacora[0][1])) {
            start = 0;
            break;
        } else if (searchValueLow > convertDateToValue(bitacora[bitacora.size()-1][0],bitacora[bitacora.size()-1][1])) {
            start = bitacora.size()-1;
            break;
        } else if (searchValueLow == compareValue) {
            start = middle;
            break;
        } else if (searchValueLow > compareValue) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    //Sequential search for lowest index of repeated value
    while(start>0 && convertDateToValue(bitacora[start][0],bitacora[start][1]) == convertDateToValue(bitacora[start-1][0],bitacora[start-1][1])){
        start--;
    }

    //Data reset for next binary search
    low = 0;
    high = bitacora.size()-1;

    //Binary search for highValue index
    while(low<=high) {
        middle = (high+low)/2;
        int compareValue = convertDateToValue(bitacora[middle][0],bitacora[middle][1]);
        if (searchValueHigh < convertDateToValue(bitacora[0][0],bitacora[0][1])) {
            end = 0;
            break;
        } else if (searchValueHigh > convertDateToValue(bitacora[bitacora.size()-1][0],bitacora[bitacora.size()-1][1])) {
            end = bitacora.size() - 1;
            break;
        } else if (searchValueHigh == compareValue) {
            end = middle;
            break;
        } else if (searchValueHigh > compareValue) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    //Sequential search for highest index of repeated value
    while(end<bitacora.size()-1 && convertDateToValue(bitacora[end][0],bitacora[end][1]) == convertDateToValue(bitacora[end+1][0],bitacora[end+1][1])){
        end++;
    }

    //Display of the selected range of dates
    for (int j = start; j <= end; j++){
        for (int i = 0; i <= 4; i++){
            cout << bitacora[j][i] << ' ';
        }
        cout << '\n';
    }
}

int main(){
    vector<vector<string>> bitacora;
    ifstream file("bitacora.txt");

    fileToVector(file, bitacora);
    sortV(bitacora,0,bitacora.size()-1);
    ofstream ofile("orderedbitacora.txt");
    printBitacora(bitacora,ofile);
    printDates(bitacora);
}