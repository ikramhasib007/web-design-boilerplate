
$(document).ready(function () {
    /**  jQuery for components */

    // for all select boxes
	$('select').selectize({
		create: true,
    	sortField: 'text'
	});

    // For Multi-select options
	$('#multi-input').selectize({
		plugins: ['remove_button'],
		delimiter: ',',
		persist: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		},
		create: function(input) {
			return {
				value: input,
				text: input
			}
		},
		createOnBlur: true,
		options: [
			{
				text: "Node.js",
				value: "Node.js"
			},{
				text: "React.js",
				value: "React.js"
			},{
				text: "Webpack.js",
				value: "Webpack.js"
			},{
				text: "Babel.js",
				value: "Babel.js"
			},{
				text: "Next.js",
				value: "Next.js"
			}
		],
		items: ["Node.js", "React.js"]
	});
	
});