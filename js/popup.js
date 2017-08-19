$(function(){
	$('button').click(function(){
		var notificationType = {
            type : 'basic',                // type of notification we can change it in chrome developer tools
            iconUrl: 'images/icon48.png',          // icon appear for limit
            title: 'Limit reached!',
            message: "Uh oh! looks like you've reached your Limit!"
		};
		// chrome.storage.sync.
		chrome.notifications.create(notificationType);
	});
    // $('#name').keyup(function(){
    //     $('#greet').text('Hello ' + $('#name').val());
    // });
});