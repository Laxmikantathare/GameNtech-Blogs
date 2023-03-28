import React,{useEffect} from 'react'
import '../postpage/postpg.css'

export default function Postpg6(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  return (
    <> 
    <div className="container-fluid"style={props.postpg}>
   <div className="container pt-4 pb-4 px-4"style={props.postpgbd}>
    <h3 className='text-center mb-3'><strong>Top 8 Machine Learning Algorithms</strong></h3>

   <p>In this article, we will see the see some of the popular and most commonly used machine learning algorithms along with their use cases and categories.</p>
   <p><mark>Machine Learning</mark>: is a subfield of Artificial Intelligence that allows software applications to become more accurate at predicting outcomes. Machine learning algorithms use historical data as input to predict new output values.</p>

   <p><strong>Below are the most commonly used Machine Learning Algorithms :</strong></p>
   <p><strong>1. <mark>Linear Regression</mark> : </strong></p>
   <p>Linear regression is one of the most popular and simple machine learning algorithms that is used for prediction. Regression is nothing but a prediction of a future value by using past data. linear regression makes predictions for continuous numbers such as salary, age, etc.
   <p>In this process, Machine learning shows a relation between a dependent and independent variables ny fitting them i a line that line is called as Regression line.</p></p>
   <p>Equation of linear regression line is,</p>
   <p><mark>Y = a*X + b</mark></p>
   <p>where, X = Independent variable, Y = Dependent Variable, a = Slope, b = Intercept</p>
   <p>Linear regression is further divided into two types:
   <p><strong>1) Simple Linear Regression</strong> : In this, a single independent variable is used to predict the value of the dependent variable.</p>
   <p><strong>2) Multiple Linear Regression</strong> : In this, more than one independent variables are used to predict the value of the dependent variable.</p>
   </p>
   <img className='jupyter mb-3'src="Machine-Learning-Algorithms.jpg" alt="" />
   <p><strong>2. <mark>Logistic Regression</mark> : </strong></p>
   <p>Logistic Regression is used to  predict the categorical variables or discrete values (usually binary values like 0/1) from a set of independent variables. It helps predict the probability of an event by fitting data to a logit function. It is also called logit regression.</p>
   <p>It can be used for the classification problems in machine learning, and the output of the logistic regression algorithm can be either Yes or NO, 0 or 1, etc.</p>
   <p>The logistic function finds applications in a range of fields, including <mark>biology, biomathematics, chemistry, economics, geoscience, probability, sociology, statistics, and artificial neural networks.</mark></p>
   <p><strong>3. <mark>Decision Tree</mark> : </strong></p>
   <p>A decision tree is a tree-structured classifier, where internal nodes represent the features of a dataset, branches represent the decision rules and each leaf node represents the outcome. It is a supervised learning algorithm that is mainly used to solve the classification problems but can also be used for solving the regression problems.<p> It works well in classifying both categorical and continuous dependent variables. This algorithm divides the population into two or more sets based on the attributes/ independent variables. In order to build a tree, we use the <mark>CART algorithm</mark>, which stands for Classification and Regression Tree algorithm.</p>
   </p>
   <p>Applications of decision tree algorithm are <mark>diagnosis of diseases, detection of frauds</mark>, etc.</p>


   <p><strong>4. <mark>Support Vector Machine (SVM)</mark> : </strong></p>
   <p>A support vector machine or SVM is a supervised learning algorithm that can also be used for classification and regression problems.  The goal of SVM is to create a hyperplane or decision boundary that can segregate datasets into different classes.</p>
   <p>The data points that help to define the hyperplane are known as support vectors, and hence it is named as support vector machine algorithm. classifiers can be used to split the data and plot them on a graph.</p>
   <p>The application of SVM are <mark>face detection, image classification, Drug discovery</mark>, etc.</p>

   <p><strong>5. <mark>Naïve Bayes Algorithm</mark> : </strong></p>
   <p>Naïve Bayes classifier is a supervised learning algorithm, which is used to make predictions based on the probability of the object. The algorithm named as Naïve Bayes as it is based on Bayes theorem. A Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature.</p>
   <p>The formula for Bayes' theorem is given as:</p>

   <p><mark>P(A|B) = (P(B|A)*P(A))/P(B)</mark></p>
 
   <p>A Naive Bayes model is easy to build and useful for massive datasets. It's simple and is known to outperform even highly sophisticated classification methods.</p>
   
   <p><strong>6. <mark>K-Nearest Neighbour (KNN)</mark> : </strong></p>
   <p>K-Nearest Neighbour is a supervised learning algorithm that can be used for both classification and regression problems.</p>
   <p> It’s a simple algorithm that stores all available cases and classifies any new cases by taking a majority vote of its k neighbors. The case is then assigned to the class with which it has the most in common. It is also known as the lazy learner algorithm as it stores all the available datasets and classifies each new case with the help of K-neighbours.</p>
   <p>The new case is assigned to the nearest class with most similarities, and any distance function measures the distance between the data points. The distance function can be Euclidean, Minkowski, Manhattan, or Hamming distance, based on the requirement.</p>
   <p>It is used for <mark>face detection, image recognization, handwriting detection</mark>, etc.</p>
   

   <p><strong>7. <mark>K-Means Clustering</mark> : </strong></p>
   <p>It is an unsupervised learning algorithm that solves clustering problems. Data sets are classified into a particular number of clusters, in such a way that all the data points within a cluster are homogenous and heterogeneous from the data in other clusters.</p>
   <p>In K-means, K-refers to the number of clusters, and means refer to the averaging the dataset in order to find the centroid. this algorithm aims to reduce the distance between the data points and their centroids within a cluster.</p>
   <p>It can be used for <mark>spam detection and filtering, identification of fake news</mark>, etc.</p>

   <p><strong>8. <mark>Random Forest</mark> : </strong></p>
   <p>Random forest is the supervised learning algorithm that can be used for both classification and regression problems in machine learning. A collection of decision trees is called a Random Forest. To classify a new object based on its attributes, each tree is classified, and the tree “votes” for that class. The forest chooses the classification having the most votes.</p>
   <p>It contains multiple decision trees for subsets of the given dataset, and find the average to improve the predictive accuracy of the model. A random-forest should contain 64-128 trees. The greater number of trees leads to higher accuracy of the algorithm.
   Random forest is a fast algorithm, and can efficiently deal with the missing & incorrect data.
   </p>
   <p>Appications of random forest are <mark>credit card fraud detection, stock price prediction, price optimization</mark>,etc.</p>
  
  <p>I hope you enjoyed reading this post and hope you learned something new! &#128515;</p>

   </div>
   </div>
     </>
  )
}
