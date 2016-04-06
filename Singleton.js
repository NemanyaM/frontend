var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var app = new Object();
        return app;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("запрещено! " + (instance1 === instance2));  
}