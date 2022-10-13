chrome.contextMenus.create({
    id: 'xyuma',
    title: 'Send xyuma',
    contexts: ['all']
})

function send(info, tab) {
    fetch('https://denis.qa/xyuma?' + new URLSearchParams({url: tab.url}))
    .then((response) => {
        chrome.tts.speak('отправила', {'lang': 'ru-RU'})
    })
    .catch((error) => {
        console.log(error)
        chrome.tts.speak('чота наябнула', {'lang': 'ru-RU'})
    })
}

chrome.commands.onCommand.addListener(send)
chrome.contextMenus.onClicked.addListener(send)
