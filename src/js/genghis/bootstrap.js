window.Genghis = {
    Base:        {},
    Models:      {},
    Collections: {},
    Views:       {},
    Templates:   {},
    defaults: {
        codeMirror: {
            mode:          "application/json",
            lineNumbers:   true,
            tabSize:       4,
            indentUnit:    4,
            matchBrackets: true
        }
    },
    boot: function(baseUrl) {
        baseUrl = baseUrl + (baseUrl.charAt(baseUrl.length - 1) == '/' ? '' : '/');
        window.App = new Genghis.Views.App({base_url: baseUrl});
        Backbone.history.start({pushState: true, root: baseUrl});
    }
};
