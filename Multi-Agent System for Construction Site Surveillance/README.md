# Multi-Agent System for Construction Site Surveillance

## Overview
This project implements a multi-agent system designed to enhance security at a construction site. The agents, including drones, cameras, and security personnel, work together to detect and respond to potential threats. The drone patrols the area, cameras monitor for suspicious activity using YOLOv4 for detection, and the security guard responds to alerts and controls the drone as needed.

## Objectives
- **Automate Surveillance:** Use drones and fixed cameras to monitor the construction site in real-time.
- **Efficient Communication:** Ensure seamless interaction between agents to quickly respond to threats.
- **Threat Detection:** Implement computer vision (YOLO) to differentiate between workers and intruders.

## Agent Descriptions
- **DronAgent:** Patrols and monitors points of interest. Sends alerts to the security guard when unusual activity is detected.
- **GuardiaAgent:** Receives alerts from the drone and cameras, and sends instructions to the drone for further action.
- **CamaraAgent:** Processes video feeds to detect intruders or workers and sends security alerts based on the analysis.

## Metrics
- **Success Rate:** Agents correctly handled 87% of security scenarios across 100 simulations.
- **YOLO Detection Accuracy:** The camera achieved 76% accuracy in distinguishing between workers and intruders.

## Installation
Due to the large file size, we uploaded the project to OneDrive. You can download the required project files from the following [OneDrive link](https://tecmx-my.sharepoint.com/personal/a01643147_tec_mx/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Ftecmx%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fa01643147%5Ftec%5Fmx%2FDocuments%2FAttachments%2FMy%20project%20%282%29%2Ezip%3Fcsf%3D1%26web%3D1%26e%3DxjHv5K%26CID%3D52362071%2D382c%2D431c%2Da7b0%2D0088515d237d&correlation=acfc51a1%2D4055%2D6000%2D8459%2D7796136d797a&Type=item&name=b29bf63f%2Dc6f8%2D4670%2Dba97%2D929ebf6cfa97&listItemId=8&listItemUniqueId=8444558b%2D0fe7%2D4c19%2Db9fb%2D2769c2786797). Follow the installation instructions to set up the Unity and Python environment.
