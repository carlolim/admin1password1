import * as faceapi from "face-api.js";
const model_url = '/weights';

const mtcnnForwardParams = {
    // number of scaled versions of the input image passed through the CNN
    // of the first stage, lower numbers will result in lower inference time,
    // but will also be less accurate
    maxNumScales: 10,
    // scale factor used to calculate the scale steps of the image
    // pyramid used in stage 1
    scaleFactor: 0.709,
    // the score threshold values used to filter the bounding
    // boxes of stage 1, 2 and 3
    scoreThresholds: [0.6, 0.7, 0.7],
    // mininum face size to expect, the higher the faster processing will be,
    // but smaller faces won't be detected
    minFaceSize: 200
}

export const detectFaceMtcnn = async (element) => {
    await faceapi.loadMtcnnModel(model_url);
    await faceapi.loadFaceRecognitionModel(model_url);
    return await faceapi.mtcnn(element, mtcnnForwardParams);
}

export const detectFaceSsdMobilenet = async (element) => {
    await faceapi.loadSsdMobilenetv1Model(model_url)
    await faceapi.loadFaceLandmarkModel(model_url)
    await faceapi.loadFaceRecognitionModel(model_url)
    return await faceapi.detectSingleFace(element).withFaceLandmarks().withFaceDescriptors();
}