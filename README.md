# Image Teachable Machine

[**Online Demo**](https://xiaohan-tian.github.io/release-teachable-machine/index.html)

Inspired by the Google Teachable Machine - Image Project, this is an alternative open-source version with the same features.

## User Guide

### IMPORTANT
You must grant camera permission to use the application.

### Introduction
The Teachable Machine is a machine learning application based on [**ml5js**](https://learn.ml5js.org/#/) that runs in a web browser. It classifies objects using training from provided images. Users can supply training images directly through their computer's built-in camera.

### Adding Classes
To make the Teachable Machine functional, you need at least two classes. Click the "+" button to add a new class.

Clicking the "Pencil" icon next to each class name allows you to change the class name.

![Adding a new class](https://github.com/Xiaohan-Tian/release/blob/main/release-teachable-machine/res/01-add-class.png?raw=true)

### Adding Training Images
In the example below, we will use 3 classes: 1) Blank, 2) Panda, and 3) Husky.

The main video displayed on the left is live-streamed from your default system camera. Use the "Camera" icon next to each class to capture the current image for that class. You can also use the "Trash" button in the top-right corner of each image to remove unwanted images.

It is recommended to add more than 16 images for each class.

![Adding training images](https://github.com/Xiaohan-Tian/release/blob/main/release-teachable-machine/res/02-add-image.png?raw=true)

### Training
After adding training images for all classes, click the "Training" button to start the training process. A progress bar will appear on the bottom left to indicate current progress.

![Training process](https://github.com/Xiaohan-Tian/release/blob/main/release-teachable-machine/res/03-training.png?raw=true)

### Classification
Once the training progress is complete, the Teachable Machine will enter classification mode. The application will continuously detect objects in the images captured from the main video and classify them based on the training data.

The progress bars on the bottom left will display the potential class of the current object along with the confidence level.

![Classification process](https://github.com/Xiaohan-Tian/release/blob/main/release-teachable-machine/res/04-classification.png?raw=true)

### Reference
- MobileNet: [https://github.com/tensorflow/tfjs-models/tree/master/mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)
- ml5js: [https://learn.ml5js.org/#/](https://learn.ml5js.org/#/)
