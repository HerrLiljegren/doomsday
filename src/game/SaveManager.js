let SaveManager = {};


SaveManager.saveHighscore = function (data) {
	fetch('/highscore', {
		type: "POST",
		data: JSON.stringify(data),
		contentType: 'application/json',
	});
};

SaveManager.loadHighscores = function (callback, context) {

	fetch('/highscores', {
		type: "GET",
		dataType: 'json',
	}).then(data => callback.call(context, data));

};

SaveManager.serialize = function () {
	var saveObject = {
		highscores: this.highscores.sort(sortHighscores)
	};
	if (this.highscores.length > 10) this.highscores.pop();

	return JSON.stringify(saveObject);
};

SaveManager.unserialize = function (state) {
	var saveObject = JSON.parse(state);
	this.highscores = saveObject.highscores.sort(sortHighscores);
};

function sortHighscores(a, b) {
	return b.score - a.score;
}

export default SaveManager;