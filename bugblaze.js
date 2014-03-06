if (Meteor.isClient) {

    Template.outer_outer.events({
        'click #show_button': function () {
            "use strict";
            Session.set("show_outer",true);
            Session.set("void_session",true);
        }
    });


    Template.outer_outer.helper = function(){
        "use strict";
        console.log("outer_outer helper called");
    };



    Template.outer_outer.show_outer = function(){
        "use strict";
        return Session.get("show_outer");
    };

    Template.outer.helper = function(){
        "use strict";
        console.log("outer helper called");

    };

    Template.inner.helper = function(){
        "use strict";
        console.log("inner helper called");
        Session.get("void_session");
    };

    Template.inner.events({
        'click #hide_button' : function(){
            "use strict";
            Session.set("show_outer",false);
            Session.set("void_session", false);
        }
    });



}

