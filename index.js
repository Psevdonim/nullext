addEventListener('load', async () => { 
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: send,
  });
});


function send(){
	const link = window.location.href
	const url = 'https://denis.qa/xyuma'
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({link,message:'sosi huy, bydlo'})
	});
	

}
