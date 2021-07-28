const ComputerVisionClient =
	require("@azure/cognitiveservices-computervision").ComputerVisionClient;
const ApiKeyCredentials = require("@azure/ms-rest-js").ApiKeyCredentials;

var mongoUtil = require("../services/db");

const classifyImage = async (req, res, next) => {
	const key = process.env.AZUREKEY;
	const endpoint =
		"https://brazilsouth.api.cognitive.microsoft.com/vision/v3.2/describe?maxCandidates=1&language=pt&model-version=latest";

	const computerVisionClient = new ComputerVisionClient(
		new ApiKeyCredentials({
			inHeader: { "Ocp-Apim-Subscription-Key": key },
		}),
		endpoint
	);

	await computerVisionClient
		.describeImageInStream(req.file.buffer, { language: "pt" })
		.then((response) => {
			console.log(response.tags);
			req.tags = response.tags;
		});

	next();
}


const handleFileUpload = async (req, res, next) => {

	const file = {
		file: Buffer.from(req.file.buffer).toString("base64"),
		properties: req.tags,
	};

	const result = await mongoUtil.insertDocument("photos", file);

	res.send(result);
};

module.exports = {
	handleFileUpload,
	classifyImage
};
