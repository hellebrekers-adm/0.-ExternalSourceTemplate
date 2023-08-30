    // Initialize Angular
function init()
{
    console.log('Loading Angular...');
    

    //Get control addin div
    var div = document.getElementById('controlAddIn');    
    //Add angular root element
    div.innerHTML += '<app-root></app-root>'; 

    var packageName = '0.-ExternalSourceTemplateAngular/'; 
    var serverName =  'https://h2909571.stratoserver.net/';

    var baseUrl = serverName + 'HellebrekerPackages/' + packageName;

    //Load angular scripts
    var runtimeUrl   = baseUrl + 'js/runtime.js';
    var polyfillsUrl = baseUrl + 'js/polyfills.js';
    var mainUrl      = baseUrl + 'js/main.js';

    //Load script function
    function loadScript(url, callback) {
        var script = document.createElement('script');
        script.onload = callback;
        script.src = url;
        document.head.appendChild(script);
    }

    //Load scripts in order
    loadScript(runtimeUrl, function() {
        loadScript(polyfillsUrl, function() {
            loadScript(mainUrl, function() {
                console.log('Angular loaded');
                Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ControlReady",[]);
            });
        });
    });    
}

/// <summary>
/// Example function to run function in angular
/// </summary>
function TEMPLATE_ACTION_NEVER_USE_REMOVE_AT_PRODUCTION(start, end, id, text, resource, backColor, cssClass, html)
{
    window.dispatchEvent(new CustomEvent('add_new_event', {
        detail: {
            args: [
            {
                start: start,
                end: end,
                id: id,
                text: text,
                resource: resource,
                backColor: backColor,
                cssClass: cssClass,
                html: html
                
            }]
        }
    }));
}
