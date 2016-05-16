$(function(){
	var searchDBString = [
		{value: "swift", url: "classes.html#swift"},
		{value:"c", url: "classes.html#c"},
		{value:"android", url: "classes.html#android"},
		{value:"swift calculator", url: "classes.html#swift#swift-calculator"},
		{value:"swift basics", url: "classes.html#swift#swift-basic"},
		{value:"first swift program", url: "classes.html#swift#swift-first"},
		{value:"swift classes", url: "classes.html#swift#swift-classes"},
		{value:"swift optionals", url: "classes.html#swift#swift-optionals"},
		{value:"swift todo list", url: "classes.html#swift#swift-todo"},
		{value:"android stack", url: "classes.html#swift#android-stack"},
		{value:"android machine settings", url: "classes.html#swift#android-machine"},
		{value:"first android program", url: "classes.html#swift#android-first"},
		{value:"android activities", url: "classes.html#swift#android-activities"},
		{value:"android widget", url: "classes.html#swift#android-widget"},
		{value:"android calculator", url: "classes.html#swift#android-calculator"},
		{value:"C basic datatypes", url: "classes.html#swift#c-basic"},
		{value:"first C program", url: "classes.html#swift#c-first"},
		{value:"passing arguments in c", url: "classes.html#swift#c-passing"},
		{value:"C compilation", url: "classes.html#swift#c-compilation"},
		{value:"arrays & pointers in C", url: "classes.html#swift#c-arrays"},
		{value:"more pointers in C", url: "classes.html#swift#c-more"},
	];

	$("#autocomplete1").autocomplete({
		source: searchDBString,
		select: function(event, ui){
			window.location = ui.item.url;
		}
	});

});
