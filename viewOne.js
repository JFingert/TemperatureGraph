var ViewOne = Backbone.View.extend({
	el: '#viewOne',

	template: require('./templates/viewOne.hbs'),

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function () {
		var self = this;
		var context = {};
		var daily = this.model.get('daily') || {data: []};
		context.currently = this.model.get('currently') || {};
		context.tempArray = [];



		daily.data.forEach(function (day) {
			var tempWeek = {};
			tempWeek.temp = day.temperatureMax;
			context.tempArray.push(tempWeek);
		});

		console.log(this.graph(context.tempArray));
		context.dThree = graph(context.tempArray);


		this.$el.html(this.template(context));
		return this;
	}

});


module.exports = ViewOne;