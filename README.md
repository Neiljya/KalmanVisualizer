# KalmanVisualizer
An interactive graphical representation of kalman computations

## Kalman Filter Explanation:

The **Kalman Filter** is a recursive algorithm used to estimate the state 
of a linear dynamical system from a series of noisy measurements.

The Filter implemented in this project is a simple one-dimensional filter
and can be broken down into the following equations:

1. **Prediction Step**:
   - **Predicted State Estimate**:

      ![predicted state estimate](https://www.sciweavers.org/upload/Tex2Img_1713301158/eqn.png)
     
   - **Predicted Estimate Covariance**:

      ![predicted estimate covariance](https://www.sciweavers.org/upload/Tex2Img_1713301218/eqn.png)
     
   Where **Q** is the process variance
2. **Update Step (Compute Kalman Gain)**:
   - **Kalman Gain**:

      ![kalman gain](https://www.sciweavers.org/upload/Tex2Img_1713301268/eqn.png)
     
   - **Updated State Estimate**:

      ![updated state estimate](https://www.sciweavers.org/upload/Tex2Img_1713301343/eqn.png)
     
   - **Updated Covariance Estimate**:

      ![updated covariance estimate](https://www.sciweavers.org/upload/Tex2Img_1713301409/eqn.png)
     
   Where **R** is the measurement variance 