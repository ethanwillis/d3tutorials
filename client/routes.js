FlowRouter.route("/", {
	name: "main",
	action: function(params, query_params) {
		BlazeLayout.render("default_layout", {content: "main"});
	}
});
