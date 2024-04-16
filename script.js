// Coding implementation of basic Kalman Filter equations

class KalmanFilter {
  constructor(process_variance, measurement_variance) {
      this.process_variance = process_variance;
      this.measurement_variance = measurement_variance;
      this.posteri_estimate = 0.0;
      this.posteri_error_estimate = 1.0;
  }

  update(measurement) {
      let priori_estimate = this.posteri_estimate;
      let priori_error_estimate = this.posteri_error_estimate + this.process_variance;
      let blending_factor = priori_error_estimate / (priori_error_estimate + this.measurement_variance);
      this.posteri_estimate = priori_estimate + blending_factor * (measurement - priori_estimate);
      this.posteri_error_estimate = (1 - blending_factor) * priori_error_estimate;
      return this.posteri_estimate;
  }
}

let kf;
let measurements = [];
let estimates = [];

function parseMeasurements(input) {
  return input.split(',').map(num => parseFloat(num.trim()));
}

function updateFilter() {
  const measurementInput = document.getElementById('measurements').value;
  const processVariance = parseFloat(document.getElementById('processVariance').value);
  const measurementVariance = parseFloat(document.getElementById('measurementVariance').value);
  const displayMode = document.getElementById('displayMode').value;

  measurements = parseMeasurements(measurementInput);
  kf = new KalmanFilter(processVariance, measurementVariance);
  estimates = measurements.map(measurement => kf.update(measurement));
  draw(displayMode);
}

function draw(displayMode) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const canvasHeight = canvas.height;
  const maxYValue = Math.max(...measurements, ...estimates) * 1.2;  // 20% more than max for visual padding
  const minYValue = Math.min(...measurements, ...estimates) * 0.8;  // 20% less than min for visual padding
  const yRange = maxYValue - minYValue;
  const pointSpacing = Math.min(40, 800 / measurements.length);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(ctx, canvas.width, canvas.height);
  drawAxes(ctx, canvas.width, canvas.height, minYValue, maxYValue, yRange);

  if (displayMode === 'lines') {
      drawLines(ctx, measurements, 'red', pointSpacing, canvasHeight, minYValue, yRange);
      drawLines(ctx, estimates, 'green', pointSpacing, canvasHeight, minYValue, yRange);
  } else {
      drawDots(ctx, measurements, 'red', pointSpacing, canvasHeight, minYValue, yRange);
      drawDots(ctx, estimates, 'green', pointSpacing, canvasHeight, minYValue, yRange);
  }
}

function drawGrid(ctx, width, height) {
  const stepX = 40;
  const stepY = 20;
  ctx.beginPath();
  for (let x = 0; x <= width; x += stepX) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
  }
  for (let y = 0; y <= height; y += stepY) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
  }
  ctx.strokeStyle = '#e9e9e9';
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawAxes(ctx, width, height, minY, maxY, yRange) {
  const axisColor = 'black';
  const labelFont = '10px Arial';
  const axisWidth = 2;
  const margin = 10;

  // Draw axes lines
  ctx.beginPath();
  ctx.strokeStyle = axisColor;
  ctx.lineWidth = axisWidth;
  ctx.moveTo(margin, 0);
  ctx.lineTo(margin, height - margin);
  ctx.lineTo(width, height - margin);
  ctx.stroke();

  // Draw labels on the axis
  ctx.font = labelFont;
  ctx.fillStyle = axisColor;
  for (let x = margin; x < width; x += 40) {
      ctx.fillText((x / 40).toFixed(0), x, height - margin / 2);
  }
  for (let y = 0; y <= height; y += 20) {
      let value = maxY - (y / height * yRange);
      ctx.fillText(value.toFixed(0), 0, y);
  }
}

function drawLines(ctx, data, color, spacing, height, minY, yRange) {
  ctx.beginPath();
  data.forEach((value, index) => {
      const x = index * spacing + 20;
      const y = height - ((value - minY) / yRange * height);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawDots(ctx, data, color, spacing, height, minY, yRange) {
  data.forEach((value, index) => {
      const x = index * spacing + 20;
      const y = height - ((value - minY) / yRange * height);
      ctx.fillStyle = color;
      ctx.fillRect(x - 2, y - 2, 4, 4);
  });
}

document.addEventListener('DOMContentLoaded', updateFilter);
