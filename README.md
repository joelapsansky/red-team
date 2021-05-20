# Red Team Project
## ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Let's dive into the storyboard`</ins> 
##### (https://docs.google.com/presentation/d/1Y2zdGDBPXmdN_HR1W3VoXMS89-FKNL99FMIY0WZH-mQ/edit?usp=sharing![image](https://user-images.githubusercontent.com/75185896/118383303-43296000-b5c2-11eb-9436-7f1fa2655f84.png)
### ![1](https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/StoryBoard_Image.png)
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Selected topic`</ins>
Key reasons for topic selection include:  
* The analysts identified a key interest amongst world wide sports fans in sports analytics 
* PGA was specifically utilized due to providing friendly data terms and a wide-array of available data to analyze    
The source of our data:  
* pgatour.com

Question to answer:  
* Which specific performance statistics collected on professional golfers contribute most to overall winnings since the start of 2017?
  
Audience: 
* Media and news outlets
* Fans
* Player support groups (e.g. caddies, coaches, etc.) with specific interests in players' successes
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Communication protocols utilized for successful teamwork`</ins>
#### Slack and Zoom were the selected platforms and soley utilized throughout this project to provide a means of reliable and successful communicaiton, video meetings, and screen sharing. Meetings convened at least two times a week, along with check-ins, and resource sharing.
## Approach and Technologies Used
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Data Cleaning and Analysis`</ins>
* This project utilizes Pandas to scrape and clean the data  
* Use of the "to_csv" function was adopted to send our cleaned dataset to a CSV for everyone to use
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Database Storage`</ins>
The Red Team created a database in AWS and added the cleaned dataset to an S3 bucket.  From there, the team wrote the data to Postgres using PySpark. Flask was utilized to display the data.
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Machine Learning`</ins>
The team used supervised learning models for the project. Experimentation with a linear model, a random forest model, and an elastic net were also used to compare and contrast.  An unsupervised learning model was used just to visualize our data in clusters.
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Dashboard`</ins>
The Red Team has used a Flask template in conjunction with D3 for the presentation.
