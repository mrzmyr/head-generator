$(function () {

	var funcs = (function() {

		this.getViewport = function (data) {
			
			var props = ['width', 'height', 'user-scaleable', 'initial-scale', 'maximum-scale', 'minimum-scale'];
			var result = [];

			for(p in props) {
				if(data[props[p]] != false) result.push(props[p] + '=' + data[props[p]]);
			} 

			return result.join(', ');
		}

		return this;
	})(),

	headData = {},

	searchRecursive = function (root) {
		for (i in root) {
			for (propertyName in root[i]) {

				var obj = root[i][propertyName];

				if (propertyName == 'items') {
					for(p = 0; p < root[i][propertyName].length; p++) {

						var ele 	= $('#' + root[i][propertyName][p].id);
							label 	= ele.parents('.control-group').not('.disabled'),
							value 	= ele.val();

						if(typeof value == 'string' && label.length > 0) {
							headData[root[i][propertyName][p].id] = (value || root[i][propertyName][p].ph);
						} else {
							headData[root[i][propertyName][p].id] = false;
						}
					}
				} else if (obj instanceof Array) {
					searchRecursive(obj);
				}
			}
		}
	};

	$('#content').html(new EJS({url: window.location.pathname + 'tpl/front.ejs'}).render(sections));

	$('.column-checkbox').click(function () {
		
		var form = $(this).parents('.form-horizontal');
		var checkboxes = form.find('.item-checkbox');

		if(!this.checked) {
			checkboxes.each(function () {
				if(this.checked) $(this).removeAttr('checked').attr('data-was-checked', true).change();
			});
		} else {

			var wasChecked = form.find('.item-checkbox[data-was-checked="true"]');

			// somehting was already toggeled
			if(wasChecked.length > 0) {
				wasChecked.attr('checked', 'checked').removeAttr('data-was-checked').change();
			} else {
				checkboxes.attr('checked', 'checked').change();
			}
			
		}
	});



	$('.item-checkbox').change(function () {
		if(!this.checked) {
			$(this).parents('.control-group').addClass('disabled');
		} else {
			$(this).parents('.control-group').removeClass('disabled');
		}
	});

	$('#generate').click(function () {

		searchRecursive(sections);
		console.log(headData);

		var head = new EJS({url: window.location.pathname + 'tpl/head.ejs'}).render({ data: headData, f: funcs });

			head = head.replace(/\n\s*\n/g, '\n');

			if(!$('#opt-comments').is(':checked')) head = head.replace(/<!--(.*)-->/g, '')

			// head = head.replace(/(\r\n|\t\n|\r\r)/gm, '\n');

		$('#result').text(head);
		prettyPrint();
	});

	$('a[rel*=external]').click(function() {
	   window.open(this.href);
	   return false;
	});
	
});