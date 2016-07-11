var simpledonut = (function() {
	function render(element, radius, thickness, values, colors, centerText) {
		const total = values.reduce(function(a,b) { return a+b; }, 0);

		var html = '<div style="position:relative">';

		// If the centerText value is specified, use it
		if (centerText) {
			html += '<div class="value" style="position:absolute;width:' +
				(radius * 2 + thickness) +
				'px;text-align:center;top:' + (radius) + 'px">'+ centerText +
				'</div>';
		}

		html += '<svg style="transform: rotate(-90deg)" width="' + (radius * 2 + thickness) + '" height="' + (radius * 2 + thickness) + '" xmlns="http://www.w3.org/2000/svg"><g>';

		var rotation = 0;

		values.forEach(function(value, index) {
			var strokeDashOffset = ((2 * radius * Math.PI) - ((value / total)) * (2 * radius * Math.PI));
			var strokeDashArray = (2 * radius * Math.PI);

			if (index > 0) {
				rotation += (strokeDashOffset / strokeDashArray) * 360;
			}

			html += '<circle transform="rotate(' + rotation + ' ' + (radius + thickness/2) + ' ' + (radius + thickness/2) + ')" r="' + radius + '" cy="50%" cx="50%" stroke-width="' + thickness + '" stroke="' + colors[index] + '" fill="none" style="stroke-dasharray:' + strokeDashArray + '; stroke-dashoffset:' + strokeDashOffset + ';';

			html += '"/>';
		});

		html += '</g></svg></div>';

		element.innerHTML = html;
	}

	return{render: render}
})();