    document.addEventListener('DOMContentLoaded', function() {
        var checkPageButton = document.getElementById('clickIt');
        checkPageButton.addEventListener('click', function() {
            chrome.tabs.query(
               {active: true, lastFocusedWindow: true},
               tabs => {
                let url = tabs[0].url
                alert("Hello" + url);
               }
                
            )

        }, false);
    }, false);
    