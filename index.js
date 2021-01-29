module.exports = {
    _init: function(options){
        this.options = options;
    },
    debug: function(log, metadata){
        console.log(log, metadata)
    },    
    error: function(log, metadata){
        console.trace(log, metadata)
    },
    info: function(log, metadata){
        console.log(log, metadata)
    },
    log: function(log, metadata){
        console.log(log, metadata)
    },
    warn: function(log, metadata){
        console.log(log, metadata)
    }
}