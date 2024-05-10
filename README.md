# Problem Statement: Advanced ANPR Solution

### Techstack:

- TensorFlow Lite, YOLOV8
- OpenCV
- Python
- OCR
- Frontend: React.Js
- Backend: MongoDB, NodeJs, ExpressJs
- Design: Figma

### Description:

The proposed solution involves capturing an image of the object, performing autocorrection
and pre-processing on the image, and then processing the image using a deep-learning
model. Now Optical Character Recognition (OCR) is used to extract text from the picture.
Before sending the extracted text to the database, the model verifies the text's language. If
the language matches any of the trained languages, it is sent directly to the database;
otherwise, the auto correction module rectifies any errors.
'The web application shows the essential information based on the data that the model
creates and stores in the database.
