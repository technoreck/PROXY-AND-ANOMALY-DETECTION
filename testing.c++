#include<fstream>
#include<iostream>
#include<cstdlib>

using namespace std;

int main()
{
	ifstream fin;
	fin.open("latest_blacklist2.txt");
	if(fin.fail())
	{
		cout << "Input file opening failed.\n";
		exit(1);
	}
	string search;
	cout << "Please enter the IP: ";
	cin  >> search;
	bool isFound=0;
	while(!fin.eof())
	{
		string temp = "";
		getline(fin,temp);
		for(int i=0;i<search.size();i++)
		{
			if(temp[i]==search[i])
				isFound = 1;
			else
			{
				isFound =0;
				break;
			}
		}

		if(isFound)
		{
			cout << "IP Found in the Dataset: "<<search;
			for(int i = search.size()+1;i<temp.size();i++)
				cout << temp[i];

			break;
		}

	}

	if(fin.eof()&&(!isFound))
	{
		cout << "IP not found!\n";
	}

	fin.close();

	return 0;
}