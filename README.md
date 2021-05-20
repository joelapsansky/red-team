# Red Team Project
## ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Take a look at the storyboard here`</ins>
https://docs.google.com/presentation/d/1Y2zdGDBPXmdN_HR1W3VoXMS89-FKNL99FMIY0WZH-mQ/edit?usp=sharing![image](https://user-images.githubusercontent.com/75185896/118383303-43296000-b5c2-11eb-9436-7f1fa2655f84.png)
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Selected topic`</ins>
Key reasons for topic selection include:  
* The team identified a key interest amongst world wide sports fans in sports analytics 
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
## Technologies Used
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Data Cleaning and Analysis`</ins>
Our team used Pandas to scrape and clean the data.  We used the "to_csv" function to send our cleaned dataset to a CSV for everyone to use.
### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) <ins>`Database Storage`</ins>
We created a database in AWS and added our cleaned dataset to an S3 bucket.  From there, we wrote the data to Postgres using PySpark.  We will use Flask to display the data.
### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) <ins>`Machine Learning`</ins>
We used supervised learning models for our project.  We have experimented with a linear model, a random forest model, and an elastic net as well.  We also ran an unsupervised learning model just to visualize our data in clusters.
### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) <ins>`Dashboard`</ins>
Our team will use a Flask template in conjunction with D3 for our presentation.