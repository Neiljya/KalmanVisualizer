# KalmanVisualizer
An interactive graphical representation of kalman computations

## Kalman Filter Explanation:
The Kalman Filter implemented in this project is a simple one-dimensional filter
and can be broken down into the following equations:

1. **Prediction Step**:
   - **Predicted State Estimate**:
     \[
     \hat{x}_{k|k-1} = \hat{x}_{k-1|k-1}
     \]
   - **Predicted Estimate Covariance**:
     \[
     P_{k|k-1} = P_{k-1|k-1} + Q
     \]
   Where \( Q \) is the process variance
2. **Update Step (Compute Kalman Gain)**:
   - **Kalman Gain**:
     \[
     K_k = \frac{P_{k|k-1}}{P_{k|k-1} + R}
     \]
   - **Updated State Estimate**:
     \[
     \hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - \hat{x}_{k|k-1})
     \]
   - **Updated Estimate Covariance**:
     \[
     P_{k|k} = (1 - K_k) P_{k|k-1}
     \]
   Where \( R \) is the measurement variance 