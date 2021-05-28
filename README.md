# Golf Performance Statistics
## ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Let's dive into the storyboard`</ins> 
##### (https://docs.google.com/presentation/d/1Y2zdGDBPXmdN_HR1W3VoXMS89-FKNL99FMIY0WZH-mQ/edit?usp=sharing![image](https://user-images.githubusercontent.com/75185896/118383303-43296000-b5c2-11eb-9436-7f1fa2655f84.png)
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/StoryBoard_Image.png width="400" height="200">

### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Selected topic`</ins>
Key reasons for topic selection:  
* The analysts identified a key interest among worldwide sports fans in sports analytics 
* Analysts used PGA data because of friendly use terms and a wide-array of available statistics to analyze    
Data Source:  
* www.PGATour.com/stats

Question to answer:  
* Which specific performance statistics collected on professional golfers contribute most to overall winnings since the start of 2017?
  
Audience: 
* PRIMARY: Fans/anyone trying to forecast
* SECONDARY: Media and news outlets  
* OTHER: Player support groups (e.g. caddies, coaches, etc.) with specific interests in players' successes
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Communication protocols utilized for successful teamwork`</ins>
The analysts solely relied upon the below sources in order to provide a means of reliable and successful communication, video meetings, and screen sharing. Meetings convened at least two times a week along with check-ins, and resource sharing.
* Slack
* Zoom 
## Approach and Technologies Used
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`1. Data Cleaning and Analysis`</ins>
* This project utilizes Pandas to scrape and clean the data  
* Use of the "to_csv" function was adopted to send our cleaned dataset to a CSV for everyone to use
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`2. Database Storage`</ins>
* The Red Team created a database in AWS and added the cleaned dataset to an S3 bucket.  From there, the team wrote the data to Postgres using PySpark. The data is displayed on GitHub pages.
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`3. Machine Learning`</ins>
* Considered 3 supervised learning regression models
1. PRIMARY: Elastic Net Regression  
2. SECONDARY: Random Forest Regression  
3. OTHER: Linear Regression    
* Red Team analysts also used an unsupervised learning model to visualize data in clusters  
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`4. Website and Dashboard`</ins>
The Red Team used JS and html files in conjunction with GitHub pages for the presentation. Here is a sneak peek (screenshots taken at time of presentation, but have been revised on the actual site):
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip1.png width="300" height="200">
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip2.png width="300" height="200">
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Website_Clip3.png width="300" height="200">
## Summary and Results
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Summary`</ins>
* The Red Team leveraged 22 performance statistics from 2017-2021 and multiple machine learning models to conduct extensive quantitative analyses, the goal of which was to identify the key performance statistics that help predict a PGA Tour golfer's annual winnings
* Winnings are the ultimate measure of success for a professional golfer. Given that purses (the winnings offered by each tournament) increase with the profile of the tournament and the corresponding level of competition, it is a reasonable assumption that the best golfers will earn the highest winnings  
* The Red Team analysts tried running all 3 aforementioned machine learning models without the highly correlated independent variables, but the R2 score did not improve (<70%) 
* The elastic net model is the primary model because it did not require the team to trim unneeded features ahead of time  
1. The team used the results from the elastic net in the linear and random forest regression models, but since the ensuing results did not improve, the Red Team published all 3 models using all identified features
2. The GitHub page incorporates charts from the elastic net machine learning Jupyter notebook so this is considered the primary model
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Key Findings and Results`</ins>
* The average PGA Tour golfer earned approximately $2 million between 2017 and 2021, although more than half of the golfers earned less than $1.55 million per year
* The Strokes Gained statistics were clearly the highest performers, and the Strokes Gained - Approach to the Green rose above the rest
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`GitHub Page`</ins>  
GitHub page at time of presentation 5/26/2021: https://ckyle121.github.io/golf_website/  
FINAL revised GitHub page deployed 5/28/2021: https://joelapsansky.github.io/golf-stats-page/
##### Thank you for your time and consideration to Red Team's Project.   
<img src=https://github.com/joelapsansky/red-team/blob/database_app/app/templates/static/images/Golf_Course.png width="550" height="200">

