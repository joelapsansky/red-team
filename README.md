# Golf Performance Statistics
## ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Let's dive into the storyboard`</ins> 
##### (https://docs.google.com/presentation/d/1Y2zdGDBPXmdN_HR1W3VoXMS89-FKNL99FMIY0WZH-mQ/edit?usp=sharing![image](https://user-images.githubusercontent.com/75185896/118383303-43296000-b5c2-11eb-9436-7f1fa2655f84.png)
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/StoryBoard_Image.png width="400" height="200">

### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Selected topic`</ins>
Key reasons for topic selection include:  
* The analysts identified a key interest among worldwide sports fans in sports analytics 
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
The below Platforms were solely utilized throughout this project to provide a means of reliable and successful communication, video meetings, and screen sharing. Meetings convened at least two times a week, along with check-ins, and resource sharing.
* Slack
* Zoom 
## Approach and Technologies Used
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`1. Data Cleaning and Analysis`</ins>
* This project utilizes Pandas to scrape and clean the data  
* Use of the "to_csv" function was adopted to send our cleaned dataset to a CSV for everyone to use
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`2. Database Storage`</ins>
The Red Team created a database in AWS and added the cleaned dataset to an S3 bucket.  From there, the team wrote the data to Postgres using PySpark. The data is displayed on GitHub pages.
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`3. Machine Learning`</ins>
* Supervised learning models for the project 
* Experimentation with a linear model, a random forest model, and an elastic net were also used to compare and contrast  
* An unsupervised learning model was used to visualize the data in clusters
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`4. Website and Dashboard`</ins>
The Red Team used JS and html files in conjunction with GitHub pages for the presentation. Here is a sneak peak:
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip1.png width="300" height="200">
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip2.png width="300" height="200">
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip3.png width="300" height="200">
## Summary and Results
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Summary`</ins>
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Results`</ins>
##### Thank you for your time and consideration to Red Team's Project 
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Golf_Course.png width="650" height="200">
