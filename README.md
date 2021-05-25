# Golf Performance Statistics
## ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Let's dive into the storyboard`</ins> 
##### (https://docs.google.com/presentation/d/1Y2zdGDBPXmdN_HR1W3VoXMS89-FKNL99FMIY0WZH-mQ/edit?usp=sharing![image](https://user-images.githubusercontent.com/75185896/118383303-43296000-b5c2-11eb-9436-7f1fa2655f84.png)
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/StoryBoard_Image.png width="400" height="200">

### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Selected topic`</ins>
Key reasons for topic selection include:  
* The analysts identified a key interest among worldwide sports fans in sports analytics 
* PGA was specifically utilized due to providing friendly data terms and a wide-array of available data to analyze    
The source of our data:  
* www.PGATour.com/stats

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
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`1. Critical Analysis Files`</ins>
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`2. Data Cleaning and Analysis`</ins>
* This project utilizes Pandas to scrape and clean the data  
* Use of the "to_csv" function was adopted to send our cleaned dataset to a CSV for everyone to use
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`3. Database Storage`</ins>
* The Red Team created a database in AWS and added the cleaned dataset to an S3 bucket.  From there, the team wrote the data to Postgres using PySpark. The data is displayed on GitHub pages.
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`4. Machine Learning`</ins>
* Supervised learning models for the project 
* Experimentation with a linear model, a random forest model, and an elastic net were also used to compare and contrast  
* An unsupervised learning model was used to visualize the data in clusters
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`5. Website and Dashboard`</ins>
The Red Team used JS and html files in conjunction with GitHub pages for the presentation. Here is a sneak peak:
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip1.png width="300" height="200">
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip2.png width="300" height="200">
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip3.png width="300" height="200">
## Summary and Results
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Summary`</ins>
* Red Team leveraged 22 performance statistics from 2017-2021 and multiple machine learning models to conduct extensive quantiative analyses, the goal of which was to identify the key performance statistics that predict a PGA Tour golfer's annual winnings
* Winnings are the ultimate measure of success for a professional golfer. Given that purses (the winnings offered by each tournament) increase with the profile of the tournament and the corresponding level of competition, it is appropriate to believe that the best golfers will earn the highest winnings
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Key Findings and Results`</ins>
* The average PGA Tour golfer earned approximately $2 million between 2017 and 2021, although more than half of the golfers earned less than $1.55 million per year
* The Strokes Gained statistics were clearly the highest performers, with the Strokes Gained - Approach the Green rose above the rest
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`GitHub Page`</ins>
https://ckyle121.github.io/golf_website/
##### Thank you for your time and consideration to Red Team's Project 
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Golf_Course.png width="550" height="200">

