# Red Team Project

## Selected topic
Reason for selecting topic:  The team is interested in sports analytics, and PGA data has friendly terms and a wide-array of available data to analyze.    
Description of source data:  pgatour.com  
Question to answer:  Which specific statistics collected on professional golfers contribute most to overall winnings since the start of 2017?  
Audience: Media, news outlets, fans, and player support groups (e.g. caddies, coaches, etc.) with specific interests in players' successes.
## Description of the communication protocols
Our team has opted to exclusively use slack for communication.  We meet and check in outside of class 2+ times per week.
## Technologies Used
### Data Cleaning and Analysis
Our team used Pandas to scrape and clean the data.  We used the "to_csv" function to send our cleaned dataset to a CSV for everyone to use.
### Database Storage
We created a database in AWS and added our cleaned dataset to an S3 bucket.  From there, we wrote the data to Postgres using PySpark.  We will use Flask to display the data.
### Machine Learning
We plan to use a supervised learning model for our project.  We have experimented with a linear model, a random forest model, and plan to try an elastic net as well.  We also ran an unsupervised learning model just to visualize our data in clusters.
### Dashboard
Our team will use a Flask template in conjunction with D3 for our presentation.
