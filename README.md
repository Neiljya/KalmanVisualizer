# KalmanVisualizer
An interactive graphical representation of kalman computations

## Kalman Filter Explanation:

The **Kalman Filter** is a recursive algorithm used to estimate the state 
of a linear dynamical system from a series of noisy measurements.

The Filter implemented in this project is a simple one-dimensional filter
and can be broken down into the following equations:

1. **Prediction Step**:
   - **Predicted State Estimate**:

      ![equation](https://github.com/Neiljya/KalmanVisualizer/assets/140043024/cd645236-e7ba-4f07-8593-abca04611127)

     
   - **Predicted Estimate Covariance**:

     ![equation (1)](https://github.com/Neiljya/KalmanVisualizer/assets/140043024/fe329e58-d05f-4df7-99dd-022ac2ab2b05)

     
   Where **Q** is the process variance
2. **Update Step (Compute Kalman Gain)**:
   - **Kalman Gain**:
     
      ![equation (2)](https://github.com/Neiljya/KalmanVisualizer/assets/140043024/e1a97562-5e0a-4c3e-997f-7e85d0db05e2)
     
     
   - **Updated State Estimate**:
     
      ![equation (3)](https://github.com/Neiljya/KalmanVisualizer/assets/140043024/f71c6329-61e6-464d-8fc9-62bd1e679b46)

     
   - **Updated Covariance Estimate**:

      ![equation (4)](https://github.com/Neiljya/KalmanVisualizer/assets/140043024/8ee677e9-dda4-468c-9afe-579646ca0e3d)

     
   Where **R** is the measurement variance 
